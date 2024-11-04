import Svgs from '@/Assets/svgs';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Photography', 'Research', 'Solution'];

  const portfolioData = [
    {
      id: 1,
      title: 'Research Project',
      category: 'Research',
      highted: true,
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-02.jpg',
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Solution Project',
      highted: true,
      category: 'Solution',
      image: '/Images/assets/blog-detail-03.jpg',
      link: 'https://example.com/project3',
    },
    {
      id: 4,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-04.jpg',
      link: 'https://example.com/project4',
    },
    {
      id: 5,
      highted: true,
      title: 'Solution Project',
      category: 'Solution',
      image: '/Images/assets/blog-detail-05.jpg',
      link: 'https://example.com/project5',
    },
    {
      id: 6,
      title: 'Research Project',
      category: 'Research',
      image: '/Images/assets/blog-detail-06.jpg',
      link: 'https://example.com/project6',
    },
    {
      id: 7,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 8,
      title: 'Research Project',
      category: 'Research',
      highted: true,
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 9,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-02.jpg',
      link: 'https://example.com/project2',
    },
    {
      id: 10,
      title: 'Solution Project',
      highted: true,
      category: 'Solution',
      image: '/Images/assets/blog-detail-03.jpg',
      link: 'https://example.com/project3',
    },
    {
      id: 11,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-04.jpg',
      link: 'https://example.com/project4',
    },
    {
      id: 12,
      highted: true,
      title: 'Solution Project',
      category: 'Solution',
      image: '/Images/assets/blog-detail-05.jpg',
      link: 'https://example.com/project5',
    },
    {
      id: 13,
      title: 'Research Project',
      category: 'Research',
      image: '/Images/assets/blog-detail-06.jpg',
      link: 'https://example.com/project6',
    },
    {
      id: 14,
      title: 'Photography Project',
      category: 'Photography',
      image: '/Images/assets/blog-detail-01.jpg',
      link: 'https://example.com/project1',
    },
  ];

  const filteredPortfolio = portfolioData.filter((item) => {
    if (activeFilter === 'All') {
      return true;
    } else {
      return item.category === activeFilter;
    }
  });

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };



// Arrays for grid columns
const column1 = [];
const column2 = [];
const column3 = [];



// Distribute data across columns
filteredPortfolio.forEach((item, index) => {
  if (index % 3 === 0) {
    column1.push(item); // Indexes 0, 3, 6, 9
  } else if (index % 3 === 1) {
    column2.push(item); // Indexes 1, 4, 7, 10
  } else {
    column3.push(item); // Indexes 2, 5, 8, 11
  }
});

  return (
    <>
      <HeaderLayout heading={'Portfolio'} page={'Portfolio'} />
      <section className="px-5 py-20 space-y-10">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-semibold">Latest Business Development & Promotions</h2>
          <p className="">Vulputate odio ut enim blandit volutpat. A arcu cursus vitae congue mauris rhoncus aenean. Nisl  <br /> suscipit adipiscing bibendum est ultricies. Nulla malesuada pellentesque elit eget gravida.</p>
        </div>
        <hr className="h-[1px] border-b border-solid" />
        <div className="space-y-10">
          <div className="flex md:gap-20 sm:gap-10 flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`uppercase font-bold ${activeFilter === filter ? 'text-[#F8955B]' : 'text-black'}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3">
            <div className="">
              {column1.map((item) => (
                <div key={item.id} className="space-y-5 cursor-pointer">

                  <div className={`relative h-64`}>
                    <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                    <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-8  rounded-tl-2xl border-t-8 border-solid">
                      <div className="flex items-center justify-center size-8">
                        <Svgs.ArrowUp className={'scale-50'}/>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4">
                    <p className="">{item.category}</p>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {column2.map((item) => (
                <div key={item.id} className="space-y-5 cursor-pointer">

                  <div className="relative h-64">
                    <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                    <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-8  rounded-tl-2xl border-t-8 border-solid">
                      <div className="flex items-center justify-center size-8">
                        <Svgs.ArrowUp className={'scale-50'}/>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4">
                    <p className="">{item.category}</p>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {column3.map((item) => (
                <div key={item.id} className="space-y-5 cursor-pointer">

                  <div className="relative h-64">
                    <img src={item.image} alt={item.title} className="w-full h-full absolute object-cover rounded-xl" />
                    <div className="absolute right-0 bottom-0 z-20 bg-[#F8955B] p-1 border-white border-l-8  rounded-tl-2xl border-t-8 border-solid">
                      <div className="flex items-center justify-center size-8">
                        <Svgs.ArrowUp className={'scale-50'}/>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4">
                    <p className="">{item.category}</p>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
