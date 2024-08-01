import api from "@/lib/axios"
import { ProjectFormData } from "../types"

export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post("/projects", formData)
    return data
  } catch (error) {
    console.log(error)
  }
}

// API query with simple Fetch by Ramer

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData),
// }
// console.log(options, "from fetchhhhh")

// try {
//   const response = await fetch(
//     `${import.meta.env.VITE_API_URL}/projects`,
//     // "http://localhost:8000/api/projects",
//     options
//   )

//   const data1 = await response.json()
//   if (!data1.success) {
//     throw new Error(data1.message)
//   }
//   console.log(data1.message, "message")
//   console.log(data1, "del fetch")
//   return data1
// } catch (error) {
//   return error
// }
// }
