import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgeDollarSign } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="min-w-screen min-h-screen bg-black flex-1">
          <div className="ml-5 pt-5 text-[#EE66A6] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xl">
              <BadgeDollarSign size={50} />
              <span className="text-[#F8FAFC] font-bold">Albion666</span>
            </div>
            <div className="flex gap-2 mr-5">
              <Button className="rounded-lg border border-gray bg-transparent">Market</Button>
              <Button className="rounded-lg border border-[#EE66A6] bg-transparent">Kensai</Button>
            </div>
          </div>
          <div className="flex-2 text-[#F8FAFC] mt-16 ">
            <div className="min-h-full min-w-full flex flex-col items-center justify-center">
              <span className="font-light text-2xl">Welcome to</span>
              <h1 className="text-[#EE66A6] text-4xl font-semibold">Albion666</h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-[40rem]   space-x-2">
            <Input type="item" placeholder="Search an Item" className="max-w-sm h-[3.4rem] text-[#F8FAFC]" />
            <Button type="submit" className="bg-[#EE66A6] h-[3.4rem] w-24 text-lg">Search</Button>
          </div>
        </div>
      </div>
    </>
  )
}
