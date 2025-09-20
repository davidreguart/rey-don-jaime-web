const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export interface ApiProduct {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  activo: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
  // Campos de traducción
  nombre_en?: string;
  descripcion_en?: string;
}

export const productApi = {
  async getProducts(): Promise<ApiProduct[]> {
    try {
    const response = await fetch(`${API_BASE_URL}/productos/`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log('Error al obtener los productos: ', error);
    throw error;
  }
},

  async getProduct(id: number): Promise<ApiProduct> {
    try {
      const response = await fetch(`${API_BASE_URL}/productos/${id}/`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error al obtener producto ${id}:`, error);
      throw error;
    }
  }
};
