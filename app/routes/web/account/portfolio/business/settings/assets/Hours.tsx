import React, { useEffect, useState } from 'react'
import { BiTime } from 'react-icons/bi'
import { TiMediaPause } from 'react-icons/ti'

const time = [
    {
        time: "Closed"
    },
    {
        time: "00:00"
    },
    {
        time: "00:15"
    },
    {
        time: "00:30"
    },
    {
        time: "00:45"
    },
    {
        time: "01:00"
    },
    {
        time: "01:15"
    },
    {
        time: "01:30"
    },
    {
        time: "01:45"
    },
    {
        time: "02:00"
    },
    {
        time: "02:15"
    },
    {
        time: "02:30"
    },
    {
        time: "02:45"
    },
    {
        time: "03:00"
    },
    {
        time: "03:15"
    },
    {
        time: "03:30"
    },
    {
        time: "03:45"
    },
    {
        time: "04:00"
    },
    {
        time: "04:15"
    },
    {
        time: "04:30"
    },
    {
        time: "04:45"
    },
    {
        time: "05:00"
    },
    {
        time: "05:15"
    },
    {
        time: "05:30"
    },
    {
        time: "05:45"
    },
    {
        time: "06:00"
    },
    {
        time: "06:15"
    },
    {
        time: "06:30"
    },
    {
        time: "06:45"
    },
    {
        time: "07:00"
    },
    {
        time: "07:15"
    },
    {
        time: "07:30"
    },
    {
        time: "07:45"
    },
    {
        time: "08:00"
    },
    {
        time: "08:15"
    },
    {
        time: "08:30"
    },
    {
        time: "08:45"
    },
    {
        time: "09:00"
    },
    {
        time: "09:15"
    },
    {
        time: "09:30"
    },
    {
        time: "09:45"
    },
    {
        time: "10:00"
    },
    {
        time: "10:15"
    },
    {
        time: "10:30"
    },
    {
        time: "10:45"
    },
    {
        time: "11:00"
    },
    {
        time: "11:15"
    },
    {
        time: "11:30"
    },
    {
        time: "11:45"
    },
    {
        time: "12:00"
    },
    {
        time: "12:15"
    },
    {
        time: "12:30"
    },
    {
        time: "12:45"
    },
    {
        time: "13:00"
    },
    {
        time: "13:15"
    },
    {
        time: "13:30"
    },
    {
        time: "13:45"
    },
    {
        time: "14:00"
    },
    {
        time: "14:15"
    },
    {
        time: "14:30"
    },
    {
        time: "14:45"
    },
    {
        time: "15:00"
    },
    {
        time: "15:15"
    },
    {
        time: "15:30"
    },
    {
        time: "15:45"
    },
    {
        time: "16:00"
    },
    {
        time: "16:15"
    },
    {
        time: "16:30"
    },
    {
        time: "16:45"
    },
    {
        time: "17:00"
    },
    {
        time: "17:15"
    },
    {
        time: "17:30"
    },
    {
        time: "17:45"
    },
    {
        time: "18:00"
    },
    {
        time: "18:15"
    },
    {
        time: "18:30"
    },
    {
        time: "18:45"
    },
    {
        time: "19:00"
    },
    {
        time: "19:15"
    },
    {
        time: "19:30"
    },
    {
        time: "19:45"
    },
    {
        time: "20:00"
    },
    {
        time: "20:15"
    },
    {
        time: "20:30"
    },
    {
        time: "20:45"
    },
    {
        time: "21:00"
    },
    {
        time: "21:15"
    },
    {
        time: "21:30"
    },
    {
        time: "21:45"
    },
    {
        time: "22:00"
    },
    {
        time: "22:15"
    },
    {
        time: "22:30"
    },
    {
        time: "22:45"
    },
    {
        time: "23:00"
    },
    {
        time: "23:15"
    },
    {
        time: "23:30"
    },
    {
        time: "23:45"
    }
]


const Hours = ({
    register,
    changeHandler,
    controlName,
    error,
    setSelectedFrom,
    setSelectedTo,
    selectedFrom,
    selectedTo
}: any) => {
    const [disabled, setDisabled] = useState(false)

    function timeToMinutes(time: string): number {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }



    useEffect(() => {
        if (selectedFrom && selectedTo) {

        }
    }, [selectedFrom, selectedTo])

    return (
        <div>
            <select
                disabled={disabled}
                {...register(controlName, {
                    onChange: (e: any) => {
                        const val = e.target.value;
                        e.preventDefault()

                        if (controlName.includes("from")) {
                            setSelectedFrom(val)
                            e.target.value = val
                        }

                        if (controlName.includes("to")) {
                            setSelectedTo(val)

                            if (selectedFrom && selectedTo) {
                                const timeFrom = timeToMinutes(selectedFrom);
                                const timeTo = timeToMinutes(selectedTo);
                                if (timeTo < timeFrom) {
                                    alert("Closing time cannot be less than opening time.")

                                }
                            }

                        }



                    }
                })}
                className={`px-2 py-3 border-[1px] border-gray-400/80 
                rounded-md w-fit `}>
                <option value="">
                    <div>
                        Selects Time
                    </div>
                </option>
                {
                    time.map((time, index) => {
                        return (

                            <option
                                key={index}
                                value={time.time}
                            >
                                {time.time}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Hours
