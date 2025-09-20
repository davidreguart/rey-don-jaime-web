from django.contrib import admin
from .models import Product, ProductTranslation

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

    fieldsets = (
        ('Información del Producto (Español por defecto)', {
            'fields': ('nombre', 'descripcion', 'imagen'),
            'description': 'Estos campos se usan como valores por defecto cuando no hay traducción disponible.'
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