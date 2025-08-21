import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title = "",
  href = "#",
  image = "",
  tags = [],
  setPreview = () => {},
  discription: description = "",
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <p className="mb-3 font-normal text-gray">{description}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {Array.isArray(tags) && tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        {/* <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center gap-1 cursor-pointer hover-animation"
       >
         Read More
         <img src="assets/arrow-right.svg" className="w-5" />
       </a> */}
      </div>
      {/* <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )} */}
    </>
  );
};

export default Project;
