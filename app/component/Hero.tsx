import heroImages from '@/sanity/schemas/heroImages';
import { client, urlFor } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const query = "*[_type == 'heroImages'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between mb:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-[40%] lg:pb-24 lg:pt-36">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl md-mb-8">
            Chic Roasted, Bold Tastes, Your Signature Sip.
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Savor the unparalleled essence of Chic Roasted coffee, where refined
            flavors meet the artistry of brewing for an exquisite experience
          </p>
        </div>
        <div className="mb-12 flex justify-center items-center w-full mb:mb-16 lg:w-[60%]">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 divide-x overflow-hidden w-96 rounded-lg border">
          <Link
            href="/capsule"
            className="flex w-1/4 items-center justify-center text-gray-700 duration-300 hover:bg-gray-200 active:bg-gray-300 "
          >
            Capsules
          </Link>
          <Link
            href="/ground"
            className="flex w-1/4 items-center justify-center text-gray-700 duration-300 hover:bg-gray-200 active:bg-gray-300 "
          >
            Ground
          </Link>
          <Link
            href="/bean"
            className="flex w-1/4 items-center justify-center text-gray-700 duration-300 hover:bg-gray-200 active:bg-gray-300 "
          >
            Bean
          </Link>
          <Link
            href="/ese-pod"
            className="flex w-1/4 items-center justify-center text-gray-700 duration-300 hover:bg-gray-200 active:bg-gray-300 "
          >
            ESE Pods
          </Link>
        </div>
      </div>
    </section>
  );
}
