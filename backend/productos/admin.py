from django.contrib import admin
from .models import Product

# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ('nombre', 'imagen', 'activo', 'fecha_creacion', 'fecha_actualizacion')
  list_filter = ('activo', 'fecha_creacion')
  search_fields = ('nombre', 'descripcion')
  list_editable = ('activo',)
  readonly_fields = ('fecha_creacion', 'fecha_actualizacion')

  verbose_name = "Producto"
  verbose_name_plural = "Productos"

  fieldsets = (
    ('Información del Producto', {
      'fields': ('nombre', 'descripcion', 'imagen')
    }),
    ('Estado', {
      'fields': ('activo',)
    }),
    ('Fechas', {
      'fields': ('fecha_creacion', 'fecha_actualizacion'),
      'classes': ('collapse',)
    })
    )

# Personalizar títulos del admin
admin.site.site_header = "Rey Don Jaime - Administración"
admin.site.site_title = "Rey Don Jaime Admin"
admin.site.index_title = "Panel de Administración"