'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'
import Button from '../button/button'
import { updateVehicleStock } from '@/actions/vehicle'
import { useState } from 'react'

interface vehicleProps {
  vehicle: vehicleType
}

export default function Card({ vehicle }: vehicleProps) {
  const [remainingUnits, setRemainingUnits] = useState(vehicle.remaining_units)

  const [buttonLabel, setButtonLabel] = useState(
    vehicle.remaining_units > 0 ? 'Comprar' : 'Esgotado',
  )

  const handleBuy = async () => {
    if (remainingUnits === 0) return

    if (remainingUnits === 1) setButtonLabel('Esgotado')

    try {
      await updateVehicleStock(vehicle.id, {
        remaining_units: remainingUnits - 1,
      })
      setRemainingUnits(remainingUnits - 1)
    } catch (e) {
      alert('Erro ao efetuar compra!')
    }
  }

  return (
    <div className={style.card}>
      <img
        src={vehicle.image}
        alt="Imagem do veículo"
        className={style.card_img}
      />
      <div className={style.card_body}>
        <h2 className={style.card_name}>{vehicle.name}</h2>
        <p className={style.card_content}>Marca: {vehicle.brand}</p>
        <p className={style.card_content}>
          Ano de lançamento: {vehicle.manufacture_year}
        </p>
        <p className={style.card_content}>Categoria: {vehicle.category.name}</p>
        <p className={style.card_content}>
          Quantidade em estoque: {remainingUnits}
        </p>
        <p className={style.card_content}>Preço: R${vehicle.price}</p>
        <Button onClick={handleBuy} disabled={buttonLabel === 'Esgotado'}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
