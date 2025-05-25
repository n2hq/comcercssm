import React, { useEffect, useState } from 'react'
import { MdError } from 'react-icons/md'
import { controlInformationClass, inputClass, inputControlWrapper, inputHeadingClass } from '~/lib/css'

const Select = ({
    controlName,
    controlTitle,
    controlPlaceholder,
    selectJson,
    register,
    changeHandler,
    error,
    setCode,
    controlInformation
}: any) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (register && changeHandler && selectJson) {
            setTimeout(() => {
                setReady(true)
            }, 1000)
        }
    }, [register, changeHandler, selectJson])



    return (
        <>
            <div className={inputControlWrapper}>
                <div className={inputHeadingClass}>
                    <div className={`mb-0`}>
                        {controlTitle}
                    </div>
                    {
                        controlInformation?.length > 1 && <div className={controlInformationClass}>
                            {controlInformation}
                        </div>
                    }
                </div>
                <div className='w-[90%]'>
                    {
                        ready && <select
                            {...register(controlName, {
                                onChange: (e: any) => {
                                    changeHandler(e)
                                    if (setCode) {
                                        setCode(e.target.value)
                                    }
                                }
                            })}
                            className={inputClass}

                        >
                            <option value="">{controlPlaceholder}</option>
                            {
                                selectJson.map((item: any, id: any) => {
                                    return (
                                        <option key={id} value={item.id}>
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>

                    }
                    {
                        error &&
                        (
                            <div className={`input__class__error`}>
                                <MdError className='text-lg' />
                                {error.message}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Select
