from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


# Create your views here.
class ProductListView(generics.ListAPIView):
  """
  Lista para listar todos los productos activos
  """

  serializer_class = ProductSerializer
  def get_queryset(self):
    # Solo vamos a devolver los productos que estén activos
    return Product.objects.filter(activo=True).order_by('fecha_creacion')

class ProductDetailView(generics.RetrieveAPIView):
  """
  Detalle para un producto específico por ID
  """
  queryset = Product.objects.filter(activo=True)
  serializer_class = ProductSerializer