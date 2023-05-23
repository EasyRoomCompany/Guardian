import { Input } from "../components/Input"
import { Image } from "../components/Image"
import easylogo from '../images/easylogo.svg'
import { FormControl, InputLabel, Select } from "@mui/material"
import Calendar from "../components/Calendar";

export const EasyRoomPage = () => {

    const handleChange = () => {
        return (
            fetch("http://localhost:3333/room")
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                })
        )
    }

    return (
        <>
            <div className="flex flex-col gap-5 justify-center items-center h-screen">
                <Image src={easylogo} alt="easy room logo" width='h-40' height='w-40' />
                <Input
                    id="nome"
                    type="text"
                    placeholder="Insira seu nome"
                    className="appearance-none rounded-none relative block w-500 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                />
                <Input
                    id="nome"
                    type="email"
                    placeholder="Seu melhor email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                />
                <Input
                    id="telefone"
                    type="tel"
                    placeholder="Telefone de contato"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                />

                <FormControl className="'w-60">
                    <InputLabel id="demo-simple-select-label" className="flex flex-col gap-5 justify-center items-center h-screen">Escolha sua sala</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"age"}
                        label="Age"
                        onChange={handleChange}
                    >

                    </Select>
                </FormControl>
                <button className="`mt-4 w-60 p-2 rounded-lg text-sm focus:outline-none border border-orange-500 ${themeColors[theme]">Agendar</button>
            </div>
            <div>
                <Calendar />
            </div>
        </>
    )
}