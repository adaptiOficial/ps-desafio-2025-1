'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'

interface vehicleProps {
  vehicle: vehicleType
}

export default function Card({ vehicle }: vehicleProps) {
  return (
    <div>
      <img src={vehicle.image} alt="Imagem do veículo" />
      <div>
        <h2>{vehicle.name}</h2>
        <p>Marca: {vehicle.brand}</p>
        <p>Ano de lançamento: {vehicle.manufacture_year}</p>
        <p>Categoria: {vehicle.category.name}</p>
        <p>Quantidade em estoque: {vehicle.remaining_units}</p>
        <p>Preço: R${vehicle.price}</p>
      </div>
    </div>
  )
}
