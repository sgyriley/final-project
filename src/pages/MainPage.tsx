import React, { useEffect, useState } from 'react';

export const MainPage = () => {
  return (
    <div>
      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="mb-3">
          <h1 className="text-3xl font-bold text-center">
            <p className="italic ...">rentrain</p>
          </h1>
        </div>
        <div className="mb-5">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100"
            style={{
              background:
                'url(https://images.unsplash.com/photo-1625834317364-b32c140fd360?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDd8fHNwb3J0cyUyMGVxdWlwbWVudHxlbnwwfHx8fDE2NTQzMzgyMDU&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450) center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 right-0 -mt-3 mr-3">
              <div className="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
                <i className="mdi mdi-fire text-base align-middle"></i>{' '}
                <span className="align-middle">NEW</span>
              </div>
            </div>
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              TOGETHER WE TRAIN
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div className="flex-1 flex items-center">
                <div
                  className="rounded-full w-8 h-8 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1595909315417-2edd382a56dc?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fHNwb3J0cyUyMGVxdWlwbWVudHxlbnwwfHx8fDE2NTQzMzgyMDU&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>Gwen Thomson</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 18
              </div>
            </div>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background:
                'url(https://images.unsplash.com/photo-1595909315417-2edd382a56dc?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fHNwb3J0cyUyMGVxdWlwbWVudHxlbnwwfHx8fDE2NTQzMzgyMDU&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450) center',
              backgroundSize: 'cover',
            }}
          >
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              Top 5 Cocktail Bars in&nbsp;NYC
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div className="flex-1 flex items-center">
                <div
                  className="rounded-full w-8 h-8 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>Kayden Buckley</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 7
              </div>
            </div>
          </a>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Yesterday</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            WEDNESDAY 5 AUGUST
          </p>
        </div>
        <div className="flex -mx-1 mb-5">
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                DJ Dan Spins The Wheels
              </h3>
            </a>
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Top Travels Destinations For 2020
              </h3>
            </a>
          </div>
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                M&S Launches New Makeup Range!
              </h3>
            </a>
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                APT Set To Be A&nbsp;Ripper
              </h3>
            </a>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Previous</h1>
        </div>
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                SPORTS
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>Jack Ryan</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                ART
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>Kevin Jackson</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                MUSIC
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>Rowena Wheeler</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                WORLD
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>Gwen Thomson</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
