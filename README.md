# PurplePro WebResume Template

PurplePro WebResume Template is a professional and elegant web resume template made using NextJS 13, TailwindCSS, and Framer Motion. The project structure is designed to make it easy to update the resume information and customize the template according to personal preferences.

Demo Url : [PurplePro-WebResume](https://purple-pro-web-resume.vercel.app/)

## Project Structure

The project structure follows the conventional NextJS structure with some modifications to make it easier to manage the content and styling of the web resume. The structure is as follows:

```bash
Project Root
├── content
│   ├── about-section
│   ├── contact-section
│   ├── hero-section
│   ├── main-config
│   ├── project-section
│   └── work-section
├── public
│   └── logo.png
└── src
    ├── app
    ├── assets
    ├── components
    ├── sections
    ├── styles
    └── utils
```

### Content

All the content-related files are stored under the content folder. The about-section, contact-section, hero-section, main-config, project-section, and work-section subfolders contain the respective content files for each section. You can easily modify the content and update it to reflect your personal information.

### Public

The public folder contains the logo.png file, which is used as the logo on the web resume.

### Src

The src folder contains the source code for the web resume. The app subfolder contains the code for the main application. The assets subfolder contains the images and other assets used in the web resume. The components subfolder contains the reusable components used throughout the web resume. The sections subfolder contains the code for each section of the web resume. The styles subfolder contains the TailwindCSS configuration files and other CSS files used in the web resume. The utils subfolder contains utility functions used in the web resume.

## How to Use

To download the repo, you can run the following command:

```bash
git clone https://github.com/robosushie/PurplePro-WebResume.git
```

After downloading the repo, you need to install the dependencies by running the following command:

```bash
npm install
```

To run the web resume locally, you can use the following command:

```bash
npm run dev
```

To build the web resume for deployment, you can use the following command:

```bash
npm run build
```

## Customization

You can easily customize the web resume by modifying the content files under the content folder and updating the styles in the styles folder. You can also modify the code for the components and sections to add new features or change the layout of the web resume.

## Credits

The PurplePro WebResume Template was created by Robosushie and is based on the NextJS 13, TailwindCSS, and Framer Motion frameworks.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
