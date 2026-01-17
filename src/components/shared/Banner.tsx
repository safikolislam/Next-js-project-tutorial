import React from 'react';
import { Button } from '../ui/button';
import BannerImg from "../../asset/igor-omilaev-FHgWFzDDAOs-unsplash.jpg"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="lg:space-y-4 bg-background border border-border  rounded-sm max-w-7xl grid grid-cols-1 md:grid-cols-2  py-5 mt-10">
              <div className="p-4 space-y-4 ">
             <Image className="rounded-md `md:h-[400px]`" src={BannerImg}  alt="banner"></Image>
           </div>
            <div className="space-y-2 p-8">
                <h4>Technology</h4>
                <h2 className="font-bold">OpenAI is  Growing Fast and Burning Through Piles of Money</h2>
                <p>Scaling artificial intelligence at this magnitude requires more than just code—it requires a massive investment in global infrastructure. While OpenAI's user base expands
                     into the hundreds of millions, the race to build the next generation of GPT models 
                     is testing the limits of venture capital and energy resources alike.</p>
                      <Button className="mt-2 w-fit">Learn More</Button>
            </div>
        </div>
    );
};

export default Banner;