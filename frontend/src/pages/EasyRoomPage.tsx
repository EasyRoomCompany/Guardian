import { useState, useEffect } from 'react';
import { Image } from '../components/Image';
import { Input } from '../components/Input';
import easylogo from '../images/easylogo.svg';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Calendar from '../components/Calendar';

interface Room {
  id: number;
  capacity: number;
  description: string;
  name: string;
  pricehour: string;
}

export const EasyRoomPage: React.FC = () => {
  const [data, setData] = useState<Room[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:3333/rooms')
      .then(resp => resp.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const style =
    'group relative w-30 flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const flexContainerStyle = isMobile ? 'flex flex-col items-center' : 'flex flex-row items-center gap-5';
  const flexBtn = isMobile ? 'grid grid-rows-5 grid-flow-col gap-4 w-60 mb-10' : 'grid grid-rows-5 grid-flow-col gap-3 w-60 mb-10';

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedId = event.target.value as number;
    setSelectedRoomId(selectedId);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={flexContainerStyle}>
        <Image src={easylogo} alt="easy room logo" width="h-40" height="w-40" className="mx-auto" />
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
            <InputLabel id="demo-simple-select-label">Escolha sua sala</InputLabel>
            <Select
              labelId="selectRoomId"
              id="selectRoom"
              value={selectedRoomId}
              onChange={handleChange}
              label="Escolha sua sala"
            >
              {data.map((room) => (
                <MenuItem key={room.id} value={room.id}>
                  {room.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Calendar />
        </div>
        <div className={flexBtn}>
                    <button type="submit" className={style}>
                        08:00
                    </button>
                    <button type="submit" className={style}>
                        09:00
                    </button>
                    <button type="submit" className={style}>
                        10:00
                    </button>
                    <button type="submit" className={style}>
                        11:00
                    </button>
                    <button type="submit" className={style}>
                        12:00
                    </button>
                    <button type="submit" className={style}>
                        13:00
                    </button>
                    <button type="submit" className={style}>
                        14:00
                    </button>
                    <button type="submit" className={style}>
                        15:00
                    </button>
                    <button type="submit" className={style}>
                        16:00
                    </button>
                    <button type="submit" className={style}>
                        17:00
                    </button>
                    <button type="submit" className={style}>
                        18:00
                    </button>
                    <button type="submit" className={style}>
                        19:00
                    </button>
                    <button type="submit" className={style}>
                        20:00
                    </button>
                    <button type="submit" className={style}>
                        21:00
                    </button>
                    <button type="submit" className={style}>
                        22:00
                    </button>
                </div>
        <button className="w-80 flex flex-col items-center justify-center p-2 rounded-lg text-sm focus:outline-none border border-orange-500">
          Agendar
        </button>
      </div>
    </div>
  );
};