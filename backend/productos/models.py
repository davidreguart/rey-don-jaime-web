from django.db import models

# Create your models here.
class Product(models.Model):
  nombre = models.CharField(max_length=200, verbose_name='Nombre del producto')
  descripcion = models.TextField(verbose_name='Descripción del producto')
  imagen = models.ImageField(upload_to='productos/', verbose_name='Imagen del producto', blank=True, null=True)
  activo = models.BooleanField (default=True, verbose_name='Activo')
  fecha_creacion = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
  fecha_actualizacion = models.DateTimeField(auto_now=True, verbose_name='Última actualización')

  class Meta:
    verbose_name = 'Producto'
    verbose_name_plural = 'Productos'
    ordering = ['-fecha_creacion']

  def __str__(self):
    return self.nombre
