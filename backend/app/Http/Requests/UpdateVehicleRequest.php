<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $sharedRules = ['sometimes', 'string', 'min:3', 'max: 30', 'regex:/^[a-zA-Z0-9\s]+$/'];
        // O sometimes deixa faz que o campo não precise necessariamente ser enviado com a requisição. Mas, se for enviado, é validado dde acordo com as regras definidas.

        return [
            'name' => array_merge($sharedRules, ['unique:vehicles']),
            'brand' => $sharedRules,
            'manufacture_year' => ['sometimes', 'integer', 'digits:4', 'min:1900', 'max:'.date('Y')],
            'image' => ['sometimes', 'image', 'mimes:jpeg,png,jpg,svg'],
            'price' => ['sometimes', 'numeric', 'min:10000', 'max:1000000'],
            'remaining_units' => ['sometimes', 'integer', 'min:0'],
            'category_id' => ['sometimes', 'exists:categories,id'],
        ];
    }
}
