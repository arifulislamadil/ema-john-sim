import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./Shipping.css"

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    console.log(user.dislayName)
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <h2>This is Shipping</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue="Address" {...register("address")} />
                <input defaultValue="Phone" {...register("phone")} />
                <input defaultValue="City" {...register("city")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;