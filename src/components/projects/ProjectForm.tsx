import { UseFormRegister, FieldErrors } from 'react-hook-form'
import ErrorMessage from "./ErrorMessage";

type ProjectFormProps = {
    register: UseFormRegister<{
        projectName: string;
        clientName: string;
        description: string;

    }>

    errors: FieldErrors<{
        projectName: string;
        clientName: string;
        description: string;

    }>
}
export default function ProjectForm({ register, errors }: ProjectFormProps) {
    return (
        <>
            <div className="mb-5 space-y-3">
                <label htmlFor="projectName" className="text-sm uppercase font-bold">
                    Project Name
                </label>
                <input
                    id="projectName"
                    className="w-full p-3 rounded-md bg-gray-500"
                    type="text"
                    placeholder="Project Name"
                    {...register("projectName", {
                        required: "Project Name is required",
                    })}
                />

                {errors.projectName && (
                    <ErrorMessage>{errors.projectName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="clientName" className="text-sm uppercase font-bold">
                    Nombre Cliente
                </label>
                <input
                    id="clientName"
                    className="w-full p-3 rounded-md bg-gray-500"
                    type="text"
                    placeholder="Client Name"
                    {...register("clientName", {
                        required: "Client name is required",
                    })}
                />

                {errors.clientName && (
                    <ErrorMessage>{errors.clientName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                    Descripción
                </label>
                <textarea
                    id="description"
                    className="w-full p-3 rounded-md bg-gray-500"
                    placeholder="Project Description"
                    {...register("description", {
                        required: "Project Description is required"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}