import { useEffect } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { selectForm, setForm } from '../../store/reducers/form/form';
import { Button, Form, Message, Label, Transition, Divider } from 'semantic-ui-react'

import './Login.scss'

type FormValues = {
  firstName: string;
  lastName: string;
  test: boolean;
};

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: values.firstName ? values : {},
//     errors: !values.firstName
//       ? {
//         firstName: {
//           type: 'required',
//           message: 'This is required.',
//         },
//       }
//       : {},
//   };
// };

const FormExampleFieldError = () => {
  const form = useSelector(selectForm);
  const dispatch = useDispatch();
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   setValue,
  //   trigger
  // } = useForm();

  const { register, handleSubmit, setValue, trigger, formState: { errors }, } = useForm<FormValues>();
  const onSubmit = (data: any, e: any) => {
    console.log("Submit event", e);
    dispatch(setForm(data));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__body'>
          <h2 className='login__header'>Sign in</h2>
          <Divider className='login__divider' />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
              name="firstName"
              // label="First name"
              placeholder="First name"
              refs={{ ...register('firstName', { required: true, maxLength: 30 }) }}
              onChange={async (e, { name, value }) => {
                setValue(name, value)
                await trigger('firstName');
              }}
              error={
                errors.firstName ? true : false
              }
            />

            <Transition visible={errors.firstName ? true : false} animation='scale' duration={500}>

              <div className='login_error'>
                {/* <span>First name is required</span> */}
                <Label pointing color='red'>First name is required</Label>
              </div>
            </Transition>

            <Form.Input
              name="lastName"
              // label="Last name"
              placeholder="Last name"
              refs={{ ...register('lastName', { required: true, maxLength: 30 }) }}
              onChange={async (e, { name, value }) => {
                setValue(name, value)
                await trigger('lastName');
              }}
              error={errors.lastName ? true : false}
            />
            <Transition visible={errors.lastName ? true : false} animation='scale' duration={500}>

              <div className='login_error'>
                {/* <span>First name is required</span> */}
                <Label pointing color='red'>Last name is required</Label>
              </div>
            </Transition>
            {/* <Form.Select
          name="genderSelect"
          options={options}
          placeholder="Gender"
          onChange={async (e, { name, value }) => {
            setValue(name, value);
            await triggerValidation({ name });
          }}
          error={errors.genderSelect ? true : false}
        /> */}
            <Form.Checkbox
              name="checkBox"
              label="I agree to the Terms and Conditions"
              refs={{ ...register('test', { required: true }) }}
              onChange={async (e, { name, checked }) => {
                setValue('test', checked as boolean)
                await trigger('test');
              }}
              error={errors.test ? true : false}
            />
            <div className='login__submit-btn'>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </div>

    </div>
  );
};

export default FormExampleFieldError;