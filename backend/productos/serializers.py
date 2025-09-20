from rest_framework import serializers
from .models import Product, ProductTranslation

class ProductTranslationSerializer(serializers.ModelSerializer):
    """
    Serializer para las traducciones de productos
    """
    language_display = serializers.CharField(source='get_language_display', read_only=True)

    class Meta:
        model = ProductTranslation
        fields = ['language', 'language_display', 'nombre', 'descripcion']

class ProductSerializer(serializers.ModelSerializer):
    """
    Serializer para productos que incluye todas las traducciones disponibles.
    """
    translations = ProductTranslationSerializer(many=True, read_only=True)

    nombre_en = serializers.SerializerMethodField()
    descripcion_en = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id',
            'nombre',
            'descripcion',
            'imagen',
            'activo',
            'fecha_creacion',
            'fecha_actualizacion',
            'translations',
            'nombre_en',
            'descripcion_en'
        ]
        read_only_fields = ['id', 'fecha_creacion', 'fecha_actualizacion']

    def get_nombre_en(self, obj):
            """
            Obtiene el nombre en inglés de la traducción, si existe.
            """
            translation = obj.get_translation('en')
            return translation['nombre']

    def get_descripcion_en(self, obj):
            """
            Obtiene la descripción en inglés del producto.
            Si no existe traducción, devuelve la descripción en español.
            """
            translation = obj.get_translation('en')
            return translation['descripcion']