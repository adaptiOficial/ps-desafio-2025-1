<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehicleRequest extends FormRequest
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
        $sharedRules = ['required', 'string', 'min:3', 'max: 30', 'regex:/^[a-zA-Z0-9\s]+$/'];

        return array_merge(
            [
                'name' => array_merge($sharedRules, ['unique:vehicles']),
                'brand' => $sharedRules,
            ],
            [
                'manufacture_year' => ['required', 'integer', 'digits:4', 'min:1900', 'max:'.date('Y')],
                'image' => ['required', 'image', 'mimes:jpeg,png,jpg,svg'],
                'price' => ['required', 'numeric', 'min:10000', 'max:1000000'],
                'remaining_units' => ['required', 'integer', 'min:0'],
                'category_id' => ['required'],
            ]

        );
    }
}
