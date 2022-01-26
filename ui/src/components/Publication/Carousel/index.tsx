import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

import * as Components from '@components';
import * as Interfaces from '@interfaces';

type Props = {
    publications: Interfaces.Publication[];
};

const Carousel: React.FC<Props> = (props): JSX.Element => {
    const container = React.useRef<HTMLDivElement | any>();

    return (
        <div className="relative">
            {/** Left arrow */}
            <button
                type="button"
                onClick={(e) => (container.current.scrollLeft += 20)}
                className="absolute -left-12 top-1/2 hidden -translate-y-full rounded outline-0 focus:ring-2 focus:ring-yellow-400 2xl:block"
            >
                <ChevronLeftIcon className="h-10 w-10 text-teal-500" />
            </button>

            <div className="overflow-hidden">
                <div
                    ref={container}
                    className="flex snap-x snap-mandatory overflow-x-scroll overscroll-y-none pt-2 pb-6"
                >
                    {props.publications.map((publication: Interfaces.Publication, index: number) => (
                        <div key={index} className="mr-10 min-w-[300px] snap-center">
                            <Components.PublicationCard publication={publication} />
                        </div>
                    ))}
                </div>
            </div>

            {/** Left arrow */}
            <button
                type="button"
                onClick={(e) => (container.current.scrollLeft -= 20)}
                className="absolute -right-8 top-1/2 z-20 hidden -translate-y-full rounded outline-0 focus:ring-2 focus:ring-yellow-400 2xl:block 3xl:-right-16 "
            >
                <ChevronRightIcon className="h-10 w-10 text-teal-500" />
            </button>

            {/** Fade off */}
            <div className="absolute top-0 right-0 h-full w-1/6 select-none bg-gradient-to-r from-transparent to-teal-50 transition-colors duration-500 dark:to-grey-800" />
        </div>
    );
};

export default Carousel;
