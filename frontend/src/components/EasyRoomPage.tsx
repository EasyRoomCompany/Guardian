import { Image } from './Image';
import { Input } from './Input';
import easylogo from '../images/easylogo.svg';
import { FormControl, InputLabel, Select } from "@mui/material";
import Calendar from "../../../Userui/src/components/Calendar";

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

    const style = "group relative w-30 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500";

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-5">
                <Image src={easylogo} alt="easy room logo" width='h-40' height='w-40' className="mx-auto" />
                <div className="mb-5">
                    <Input
                        id="nome"
                        type="text"
                        placeholder="Insira seu nome"
                        className="appearance-none rounded-none relative block w-120 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mb-5"
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Seu melhor email"
                        className="appearance-none rounded-none relative block w-120 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mb-5"
                    />
                    <Input
                        id="telefone"
                        type="tel"
                        placeholder="Telefone de contato"
                        className="appearance-none rounded-none relative block w-120 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mb-5"
                    />
                    <FormControl className="w-80">
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
                    <Calendar />
                </div>
                <div className="grid grid-rows-6 grid-flow-col gap-3 w-60 mb-10">
                    <button type="submit" className={style}>08:00</button>
                    <button type="submit" className={style}>09:00</button>
                    <button type="submit" className={style}>10:00</button>
                    <button type="submit" className={style}>11:00</button>
                    <button type="submit" className={style}>12:00</button>
                    <button type="submit" className={style}>13:00</button>
                    <button type="submit" className={style}>14:00</button>
                    <button type="submit" className={style}>15:00</button>
                    <button type="submit" className={style}>16:00</button>
                    <button type="submit" className={style}>17:00</button>
                    <button type="submit" className={style}>18:00</button>
                    <button type="submit" className={style}>19:00</button>
                </div>
                <div className="w-80 flex flex-col items-center justify-center h-screen">
                    <button className="w-80 mt-5 p-2 rounded-lg text-sm focus:outline-none border border-orange-500">Agendar</button>
                </div>
            </div>
        </>
    );
};
