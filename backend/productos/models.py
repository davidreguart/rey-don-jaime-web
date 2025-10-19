from django.db import models

# Create your models here.
class Product(models.Model):
  nombre = models.CharField(max_length=200, verbose_name='Nombre del producto')
  descripcion = models.TextField(verbose_name='Descripción del producto')
  imagen = models.ImageField(upload_to='productos/', verbose_name='Imagen del producto', blank=True, null=True)
  formatos = models.JSONField(default=list, verbose_name='Formatos disponibles', help_text='Lista de formatos disponibles para este producto')
  activo = models.BooleanField (default=True, verbose_name='Activo')
  fecha_creacion = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
  fecha_actualizacion = models.DateTimeField(auto_now=True, verbose_name='Última actualización')

  class Meta:
    verbose_name = 'Producto'
    verbose_name_plural = 'Productos'
    ordering = ['-fecha_creacion']

  def __str__(self):
    return self.nombre

  def get_translation(self, language='es'):
    """
    Obtiene la traducción del producto para un idioma específico.
    Si no existe, devuelve los valores por defecto (español).
    """
    try:
      translation = self.translations.get(language=language)
      return {
        'nombre': translation.nombre,
        'descripcion': translation.descripcion
      }
    except ProductTranslation.DoesNotExist:
      # Si no hay traducción, devolver los valores por defecto
      return {
        'nombre': self.nombre,
        'descripcion': self.descripcion
      }


class ProductTranslation(models.Model):
  """
  Modelo para almacenar las traducciones de los productos.
  Cada producto puede tener múltiples traducciones (una por idioma).
  """
  product = models.ForeignKey(
    Product, 
    related_name='translations', 
    on_delete=models.CASCADE,
    verbose_name='Producto'
  )
  language = models.CharField(
    max_length=2, 
    choices=[
      ('es', 'Español'),
      ('en', 'English')
    ],
    verbose_name='Idioma'
  )
  nombre = models.CharField(max_length=200, verbose_name='Nombre traducido')
  descripcion = models.TextField(verbose_name='Descripción traducida')
  
  class Meta:
    verbose_name = 'Traducción de Producto'
    verbose_name_plural = 'Traducciones de Productos'
    unique_together = ('product', 'language')  # Un producto solo puede tener una traducción por idioma
    ordering = ['product', 'language']

  def __str__(self):
    return f"{self.product.nombre} ({self.get_language_display()})"