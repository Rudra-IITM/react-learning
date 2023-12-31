import React from 'react'

const Card = () => {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fdfstudio-d420.kxcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F06%2Fdigital_camera_photo-1080x675.jpg&tbnid=0kl2WrGN8BrkhM&vet=12ahUKEwj8h-aA17eDAxVtZmwGHU_vAXQQMygFegQIARBY..i&imgrefurl=https%3A%2F%2Fwww.dfstudio.com%2Fdigital-image-size-and-resolution-what-do-you-need-to-know%2F&docid=KEFtss0dYCDpzM&w=1080&h=675&q=image&ved=2ahUKEwj8h-aA17eDAxVtZmwGHU_vAXQQMygFegQIARBY" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius asperiores doloremque inventore natus est molestiae pariatur porro veniam non nisi quaerat magnam, minus tenetur ipsum impedit voluptate quos excepturi.
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card