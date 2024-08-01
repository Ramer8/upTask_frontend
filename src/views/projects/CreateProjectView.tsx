import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import ProjectForm from "@/components/projects/ProjectForm";
import { ProjectFormData } from "@/types/index";
import { createProject } from "@/api/ProjectAPI";
import { toast } from 'react-toastify'

export default function CreateProjectView() {

    const initialsValues = {
        "projectName": "",
        "clientName": "",
        "description": ""
    }
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialsValues })

    const handleForm = async (formData: ProjectFormData) => {
        const data = await createProject(formData);
        toast(data)
        navigate('/')
    }

    return (
        <>
            <div className="max-w-3xl mx-auto">

                <h1 className="text-5xl text-gray-200 font-black">Create Project</h1>
                <p className="text-2xl font-light text-gray-400 mt-5">Fill in the form below to create a project</p>

                <nav className="my-5">

                    <Link className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors rounded-md"
                        to='/'
                    >
                        Return to Project</Link>
                </nav>

                <form
                    className="mt-10 bg-gray-400 shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate>

                    <ProjectForm
                        register={register}
                        errors={errors} />

                    <input
                        type="submit"
                        value={"Create Project"}
                        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded-md"
                    />
                </form>
            </div>

        </>)
}
