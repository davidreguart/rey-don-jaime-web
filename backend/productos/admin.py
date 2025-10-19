from django.contrib import admin
from django import forms
from .models import Product, ProductTranslation

# Definir formatos disponibles
FORMATOS_DISPONIBLES = [
    ('8 ml', '8 ml'),
    ('10 ml', '10 ml'),
    ('250 ml', '250 ml'),
    ('500 ml', '500 ml'),
    ('750 ml', '750 ml'),
    ('1 L', '1 L'),
    ('5 L', '5 L'),
    ('10 L', '10 L'),
    ('25 L', '25 L'),
]

# Widget personalizado para selección múltiple de formatos
class FormatosWidget(forms.CheckboxSelectMultiple):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.choices = FORMATOS_DISPONIBLES

# Form personalizado para el modelo Product
class ProductAdminForm(forms.ModelForm):
    formatos = forms.MultipleChoiceField(
        choices=FORMATOS_DISPONIBLES,
        widget=FormatosWidget,
        required=False,
        help_text="Selecciona los formatos disponibles para este producto"
    )
    
    class Meta:
        model = Product
        fields = '__all__'
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance and self.instance.pk and self.instance.formatos:
            # Si el producto ya existe y tiene formatos, preseleccionarlos
            self.fields['formatos'].initial = self.instance.formatos
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        # Guardar los formatos seleccionados como lista
        instance.formatos = self.cleaned_data.get('formatos', [])
        if commit:
            instance.save()
        return instance

# Configuración para editar traducciones dentro del producto
class ProductTranslationInline(admin.TabularInline):
    """
    Permite editar las traducciones directamente desde la página del producto.
    Aparecerá como una tabla debajo de los campos del producto.
    """
    model = ProductTranslation
    extra = 2  # Mostrar 2 campos vacíos por defecto (para es y en)
    max_num = 2  # Máximo 2 traducciones (español e inglés)
    fields = ('language', 'nombre', 'descripcion')
    verbose_name = "Traducción"
    verbose_name_plural = "Traducciones"

# Configuración del admin para productos
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'get_translations_status', 'activo', 'fecha_creacion')
    list_filter = ('activo', 'fecha_creacion')
    search_fields = ('nombre', 'descripcion')
    list_editable = ('activo',)
    readonly_fields = ('fecha_creacion', 'fecha_actualizacion')
    inlines = [ProductTranslationInline]  # Incluir las traducciones

    verbose_name = "Producto"
    verbose_name_plural = "Productos"

    form = ProductAdminForm  # Usar el form personalizado
    
    fieldsets = (
        ('Información del Producto (Español por defecto)', {
            'fields': ('nombre', 'descripcion', 'imagen'),
            'description': 'Estos campos se usan como valores por defecto cuando no hay traducción disponible.'
        }),
        ('Formatos Disponibles', {
            'fields': ('formatos',),
            'description': 'Selecciona los formatos disponibles para este producto que aparecerán en el modal del frontend.'
        }),
        ('Estado', {
            'fields': ('activo',)
        }),
        ('Fechas', {
            'fields': ('fecha_creacion', 'fecha_actualizacion'),
            'classes': ('collapse',)
        })
    )

    def get_translations_status(self, obj):
        """
        Muestra qué idiomas tienen traducción en la lista de productos.
        """
        translations = obj.translations.all()
        languages = [t.get_language_display() for t in translations]
        if languages:
            return f"Traducido a: {', '.join(languages)}"
        return "Sin traducciones"
    
    get_translations_status.short_description = "Estado de Traducciones"

# Configuración del admin para traducciones (gestión separada)
@admin.register(ProductTranslation)
class ProductTranslationAdmin(admin.ModelAdmin):
    """
    Administración separada para gestionar todas las traducciones.
    Útil para revisar y editar traducciones de forma masiva.
    """
    list_display = ('product', 'language', 'nombre', 'get_language_display')
    list_filter = ('language', 'product__activo')
    search_fields = ('nombre', 'descripcion', 'product__nombre')
    list_editable = ('nombre',)
    
    fieldsets = (
        ('Información de la Traducción', {
            'fields': ('product', 'language')
        }),
        ('Contenido Traducido', {
            'fields': ('nombre', 'descripcion')
        })
    )

    def get_language_display(self, obj):
        """Muestra el nombre completo del idioma"""
        return obj.get_language_display()
    
    get_language_display.short_description = "Idioma"

# Personalizar títulos del admin
admin.site.site_header = "Rey Don Jaime - Administración"
admin.site.site_title = "Rey Don Jaime Admin"
admin.site.index_title = "Panel de Administración"