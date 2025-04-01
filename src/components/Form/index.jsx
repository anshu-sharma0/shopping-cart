import React from 'react'
import Layout from '../../layout'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    const handleReset = () => {
        reset();
    };

    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl text-center text-gray-700 mb-6">Contact Form</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
                        <input
                            {...register("name")}
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                        <input
                            {...register("email")}
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-green-500 text-white py-3 px-6 rounded-md focus:outline-none hover:bg-green-600 transition duration-300"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-md focus:outline-none hover:bg-red-600 transition duration-300"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Form;
