<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Models\Vehicle;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class VehicleController extends Controller
{
    protected $vehicle;

    public function __construct(Vehicle $vehicle)
    {
        $this->vehicle = $vehicle;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $vehicle = $this->vehicle->with('category')->get();

        return response()->json($vehicle, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->has('image')) {
            $path = $request->file('image')->store('vehicles', 'public');
            $data['image'] = url('storage/'.$path);
        }

        $vehicle = $this->vehicle->create($data);
        $id = $vehicle->id;
        $vehicle_category = $this->vehicle->with('category')->findOrFail($id);

        return response()->json($vehicle_category, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $vehicle = $this->vehicle->with('category')->findOrFail($id);

        return response()->json($vehicle, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleRequest $request, $id): JsonResponse
    {
        $vehicle = $this->vehicle->with('category')->findOrFail($id);
        $data = $request->validated();

        // dd($data);

        if ($request->hasFile('image')) {
            try {
                $image_name = explode('vehicles/', $vehicle['image']);
                Storage::disk('public')->delete('vehicles/'.$image_name[1]);
            } catch (Throwable) {
            } finally {
                $path = $request->file('image')->store('vehicles', 'public');
                $data['image'] = url('storage/'.$path);
            }
        }

        $vehicle->update($data);
        // $vehicle_category = $this->vehicle->with('category')->findOrFail($id);

        return response()->json($vehicle, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $vehicle = $this->vehicle->findOrFail($id);
        $vehicle->delete();

        return response()->json(['message' => 'Veículo deletado com sucesso!']);
    }
}
