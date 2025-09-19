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