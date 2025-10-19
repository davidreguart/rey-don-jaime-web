from django.core.management.base import BaseCommand
from productos.models import Product, ProductTranslation
from django.utils import timezone
from datetime import timedelta

class Command(BaseCommand):
    help = 'Elimina productos antiguos manteniendo solo los 20 más recientes'

    def add_arguments(self, parser):
        parser.add_argument(
            '--confirm',
            action='store_true',
            help='Confirma la eliminación de productos antiguos',
        )
        parser.add_argument(
            '--keep-count',
            type=int,
            default=20,
            help='Número de productos más recientes a mantener (por defecto: 20)',
        )

    def handle(self, *args, **options):
        keep_count = options['keep_count']
        confirm = options['confirm']
        
        self.stdout.write(self.style.WARNING(f'Analizando productos en la base de datos...'))
        
        # Obtener todos los productos ordenados por fecha de creación (más recientes primero)
        all_products = Product.objects.all().order_by('-fecha_creacion')
        total_products = all_products.count()
        
        self.stdout.write(f'Total de productos encontrados: {total_products}')
        
        if total_products <= keep_count:
            self.stdout.write(
                self.style.SUCCESS(
                    f'No hay productos que eliminar. '
                    f'Tienes {total_products} productos y quieres mantener {keep_count}.'
                )
            )
            return
        
        # Productos a mantener (los más recientes)
        products_to_keep = all_products[:keep_count]
        
        # Productos a eliminar (los más antiguos)
        products_to_delete = all_products[keep_count:]
        products_to_delete_count = products_to_delete.count()
        
        self.stdout.write(f'\n📊 Resumen:')
        self.stdout.write(f'   • Productos a mantener: {keep_count}')
        self.stdout.write(f'   • Productos a eliminar: {products_to_delete_count}')
        
        # Mostrar los productos que se van a mantener
        self.stdout.write(f'\n✅ Productos que se mantendrán (los {keep_count} más recientes):')
        for i, product in enumerate(products_to_keep, 1):
            self.stdout.write(
                self.style.SUCCESS(
                    f'   {i:2d}. {product.nombre} (creado: {product.fecha_creacion.strftime("%Y-%m-%d %H:%M:%S")})'
                )
            )
        
        # Mostrar los productos que se van a eliminar
        if products_to_delete_count > 0:
            self.stdout.write(f'\n❌ Productos que se eliminarán:')
            for i, product in enumerate(products_to_delete, 1):
                self.stdout.write(
                    self.style.ERROR(
                        f'   {i:2d}. {product.nombre} (creado: {product.fecha_creacion.strftime("%Y-%m-%d %H:%M:%S")})'
                    )
                )
        
        if not confirm:
            self.stdout.write(
                self.style.WARNING(
                    f'\n⚠️  MODO SIMULACIÓN - No se eliminará nada.\n'
                    f'   Para confirmar la eliminación, ejecuta:\n'
                    f'   python manage.py clean_old_products --confirm'
                )
            )
            return
        
        # Confirmar eliminación
        self.stdout.write(
            self.style.ERROR(
                f'\n🚨 ATENCIÓN: Vas a eliminar {products_to_delete_count} productos de forma PERMANENTE.'
            )
        )
        
        response = input('¿Estás seguro? Escribe "ELIMINAR" para confirmar: ')
        
        if response != 'ELIMINAR':
            self.stdout.write(self.style.WARNING('Operación cancelada.'))
            return
        
        # Proceder con la eliminación
        deleted_count = 0
        deleted_translations_count = 0
        
        for product in products_to_delete:
            # Contar traducciones antes de eliminar
            translations_count = product.translations.count()
            deleted_translations_count += translations_count
            
            product_name = product.nombre
            product.delete()  # Esto también eliminará las traducciones por CASCADE
            deleted_count += 1
            
            self.stdout.write(
                self.style.SUCCESS(f'✓ Eliminado: {product_name}')
            )
        
        self.stdout.write(
            self.style.SUCCESS(
                f'\n🎉 Limpieza completada:\n'
                f'   • Productos eliminados: {deleted_count}\n'
                f'   • Traducciones eliminadas: {deleted_translations_count}\n'
                f'   • Productos restantes: {Product.objects.count()}'
            )
        )
        
        # Verificación final
        remaining_products = Product.objects.all().order_by('-fecha_creacion')
        self.stdout.write(f'\n📋 Productos finales en la base de datos:')
        for i, product in enumerate(remaining_products, 1):
            self.stdout.write(
                f'   {i:2d}. {product.nombre} (creado: {product.fecha_creacion.strftime("%Y-%m-%d %H:%M:%S")})'
            )