'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm,
  handleImageChange,
} from '@/components/dashboard/form'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { cn } from '@/lib/utils'
import { api, ResponseErrorType } from '@/services/api'
import { categoryType } from '@/types/category'
import { vehicleType } from '@/types/vehicle'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

interface FormFieldsVehicleProps {
  vehicle?: vehicleType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsVehicle({
  vehicle,
  readOnly,
  error,
}: FormFieldsVehicleProps) {
  const { pending } = useFormStatus()
  const [categories, setCategories] = useState<categoryType[]>()
  const [updateImage, setUpdateImage] = useState<string | undefined>()

  const requestData = async () => {
    try {
      const response = await api('GET', '/categories')
      if (response.error) {
        console.log('Não foi possível carregar as categorias')
      } else {
        setCategories(response.response as categoryType[])
      }
    } catch (e) {
      console.log('Ocorreu um erro inesperado')
    }
  }

  useEffect(() => {
    requestData()
  }, [])

  return (
    <>
      <FormFieldsGroup>
        {vehicle && (
          <Input defaultValue={vehicle.id} type="text" name="id" hidden />
        )}

        <FormField>
          <Label htmlFor="name" required={!vehicle}>
            Nome
          </Label>
          <Input
            name="name"
            id="name"
            placeholder="Digite o nome do veículo"
            defaultValue={vehicle?.name}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.name}
          />
        </FormField>

        <FormField>
          <Label htmlFor="brand" required={!vehicle}>
            Marca
          </Label>
          <Input
            name="brand"
            id="brand"
            placeholder="Digite a marca do veículo"
            defaultValue={vehicle?.brand}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.brand}
          />
        </FormField>

        <FormField>
          <Label htmlFor="manufacture_year" required={!vehicle}>
            Ano de lançamento
          </Label>
          <Input
            name="manufacture_year"
            id="manufacture_year"
            placeholder="Digite o ano de lançamento do veículo"
            defaultValue={vehicle?.manufacture_year}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.manufacture_year}
          />
        </FormField>

        <FormField>
          <Label
            htmlFor="image"
            hidden={readOnly && !vehicle?.image}
            required={!vehicle}
          >
            Imagem
          </Label>
          <Input
            name="image"
            id="image"
            type="file" // Pode ser que dê problema aqui por causa de ter admitido imagem como do tipo image no back, em vez de file, como foi na aula (só um lembrete)
            accept="image/*"
            disabled={pending}
            hidden={readOnly}
            readOnly={readOnly}
            onChange={(e) => handleImageChange(e, setUpdateImage)}
            error={error?.errors?.image}
          />
          <ImageForm
            className="aspect-square size-40"
            src={updateImage || vehicle?.image}
          />
        </FormField>

        <FormField>
          <Label htmlFor="price" required={!vehicle}>
            Preço do veículo
          </Label>
          <Input
            name="price"
            id="price"
            placeholder="Digite o preço do veículo"
            defaultValue={vehicle?.price}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.price}
          />
        </FormField>

        <FormField>
          <Label htmlFor="remaining_units" required={!vehicle}>
            Quantidade em estoque
          </Label>
          <Input
            name="remaining_units"
            id="remaining_units"
            placeholder="Digite a quantidade de exemplares deste veículo que há em estoque"
            defaultValue={vehicle?.remaining_units}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.remaining_units}
          />
        </FormField>

        <FormField>
          <Select
            disabled={pending || readOnly}
            name="category_id"
            defaultValue={vehicle?.category_id}
          >
            <Label>Categoria</Label>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a categoria do veículo:" />
            </SelectTrigger>
            <SelectContent id="category_id">
              <SelectGroup id="category_id">
                {categories?.map((categoryType, index) => (
                  <SelectItem value={categoryType.id} key={index}>
                    {categoryType.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>

        {error?.errors?.category_id && (
          <p className="text-destructive text-xs mt-2">
            {error?.errors?.category_id}
          </p>
        )}
      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}
