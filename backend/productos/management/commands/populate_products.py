from django.core.management.base import BaseCommand
from productos.models import Product, ProductTranslation

class Command(BaseCommand):
    help = 'Populate the database with Rey Don Jaime products'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting to populate products...'))
        
        # Lista de productos con sus datos
        products_data = [
            {
                'nombre': 'Aceite de Oliva Virgen Extra',
                'descripcion': 'Aceite de oliva de categoría superior obtenido directamente de aceitunas y solo mediante procedimientos mecánicos.',
                'marca': 'Rey Don Jaime',
                'formatos': ['10 ml', '250 ml', '500 ml', '750 ml', '1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Virgen',
                'descripcion': 'Aceite de oliva obtenido directamente de aceitunas y solo mediante procedimientos mecánicos.',
                'marca': 'Rey Don Jaime',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Intenso',
                'descripcion': 'Aceite que contiene exclusivamente aceites de oliva sometidos a un tratamiento de refinado y aceites obtenidos directamente de aceitunas.',
                'marca': 'Rey Don Jaime',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Suave',
                'descripcion': 'Aceite que contiene exclusivamente aceites de oliva sometidos a un tratamiento de refinado y aceites obtenidos directamente de aceitunas.',
                'marca': 'Rey Don Jaime',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Orujo de Oliva',
                'descripcion': 'Aceite que contiene exclusivamente aceites procedentes del tratamiento del producto obtenido tras la extracción del aceite de oliva y de aceites obtenidos directamente de aceitunas.',
                'marca': 'Rey Don Jaime',
                'formatos': ['250 ml', '500 ml', '1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Girasol',
                'descripcion': 'Aceite refinado de girasol.',
                'marca': 'Rey Don Jaime',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Girasol Alto Oleico',
                'descripcion': 'Aceite refinado de girasol con alto contenido oleico.',
                'marca': 'Rey Don Jaime',
                'formatos': ['5 L', '25 L']
            },
            {
                'nombre': 'Aceite de Semillas',
                'descripcion': 'Aceite refinado de soja modificada genéticamente y aceite refinado de girasol.',
                'marca': 'Rey Don Jaime',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Soja',
                'descripcion': 'Aceite refinado de soja modificada genéticamente.',
                'marca': 'Rey Don Jaime',
                'formatos': ['10 L', '25 L']
            },
            {
                'nombre': 'Aceite Especial Freidora',
                'descripcion': 'Aceite vegetal refinado (canola y girasol), antiespumante (E-900) y antioxidantes (E-304, E-310). Fritura profesional especial hostelería, alta resistencia y duración.',
                'marca': 'Rey Don Jaime',
                'formatos': ['10 L', '25 L']
            },
            {
                'nombre': 'Vinagre de Vino',
                'descripcion': 'Vinagre de vino y antioxidante (dióxido de azufre).',
                'marca': 'Rey Don Jaime',
                'formatos': ['8 ml', '250 ml', '1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Virgen Extra Premium',
                'descripcion': 'Aceite de oliva de categoría superior obtenido directamente de aceitunas y solo mediante procedimientos mecánicos.',
                'marca': 'Rey Don Jaime',
                'formatos': ['250 ml', '500 ml', '750 ml', '1 L']
            },
            {
                'nombre': 'Aceite de Oliva Virgen Extra Aromatizados',
                'descripcion': 'Aceite de oliva virgen extra con ingredientes aromáticos (trufa negra, trufa blanca, limón, romero, chile, ajo, orégano o albahaca).',
                'marca': 'Rey Don Jaime',
                'formatos': ['250 ml']
            },
            {
                'nombre': 'Aceite de Oliva Virgen Extra',
                'descripcion': 'Aceite de oliva de categoría superior obtenido directamente de aceitunas y solo mediante procedimientos mecánicos.',
                'marca': 'Dally',
                'formatos': ['10 ml', '250 ml', '750 ml', '1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Virgen',
                'descripcion': 'Aceite de oliva obtenido directamente de aceitunas y solo mediante procedimientos mecánicos.',
                'marca': 'Dally',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Intenso',
                'descripcion': 'Aceite que contiene exclusivamente aceites de oliva refinados y aceites obtenidos directamente de aceitunas.',
                'marca': 'Dally',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Suave',
                'descripcion': 'Aceite que contiene exclusivamente aceites de oliva refinados y aceites obtenidos directamente de aceitunas.',
                'marca': 'Dally',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Orujo de Oliva',
                'descripcion': 'Aceite de orujo de oliva refinado y aceite de oliva virgen.',
                'marca': 'Dally',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Girasol',
                'descripcion': 'Aceite refinado de girasol.',
                'marca': 'Dally',
                'formatos': ['1 L', '5 L']
            },
            {
                'nombre': 'Aceite de Oliva Virgen Extra Ecológico',
                'descripcion': 'Aceite de oliva virgen extra de categoría superior obtenido directamente de aceitunas ecológicas.',
                'marca': 'Eco-Travadell',
                'formatos': ['500 ml', '1 L']
            }
        ]
        
        created_count = 0
        updated_count = 0
        
        for product_data in products_data:
            # Crear el nombre completo con la marca
            nombre_completo = f"{product_data['nombre']} - {product_data['marca']}"
            
            # Verificar si el producto ya existe
            product, created = Product.objects.get_or_create(
                nombre=nombre_completo,
                defaults={
                    'descripcion': product_data['descripcion'],
                    'formatos': product_data['formatos'],
                    'activo': True
                }
            )
            
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'✓ Creado: {nombre_completo}')
                )
            else:
                # Actualizar la descripción y formatos si el producto ya existe
                product.descripcion = product_data['descripcion']
                product.formatos = product_data['formatos']
                product.save()
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'↻ Actualizado: {nombre_completo}')
                )
            
            # Crear traducción en inglés (opcional)
            translation_en, trans_created = ProductTranslation.objects.get_or_create(
                product=product,
                language='en',
                defaults={
                    'nombre': nombre_completo,  # Por ahora mantenemos el mismo nombre
                    'descripcion': product_data['descripcion']  # Descripción sin formatos
                }
            )
        
        self.stdout.write(
            self.style.SUCCESS(
                f'\n✅ Proceso completado:\n'
                f'   • Productos creados: {created_count}\n'
                f'   • Productos actualizados: {updated_count}\n'
                f'   • Total procesados: {len(products_data)}'
            )
        )