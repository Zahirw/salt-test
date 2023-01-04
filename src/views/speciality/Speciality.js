import React from 'react'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Accesories from '../../assets/image/accesories.svg'
import Speed from '../../assets/image/speed.svg'
import exhaust from '../../assets/image/exhaust.svg'



const images = [
  {
    imgPath: Accesories,
  },
  {
    imgPath: Speed,
  },
  {
    imgPath: exhaust,
  },
];

const Speciality = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };
  return (
   <>
    <div className='container bg-sky-500 flex justify-center p-5'>
      <div className='bg-white p-10'>
        <p className='text-2xl text-title font-bold pb-4'>OUR SPECIALITY</p>
        <p className='pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
        <div className='flex justify-center pb-5'>
          <img src={images[activeStep].imgPath} alt=''/>
        </div>
        <p className='pb-5 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </div>
   </>
  //   <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
  //   <Paper
  //     square
  //     elevation={0}
  //     sx={{
  //       display: 'flex',
  //       alignItems: 'center',
  //       height: 50,
  //       pl: 2,
  //       bgcolor: 'background.default',
  //     }}
  //   >
  //     <Typography>{images[activeStep].label}</Typography>
  //     <img src={images[activeStep].imgPath} alt=''/>
  //   </Paper>
  //   <MobileStepper
  //     steps={maxSteps}
  //     position="static"
  //     activeStep={activeStep}
  //     nextButton={
  //       <Button
  //         size="small"
  //         onClick={handleNext}
  //         disabled={activeStep === maxSteps - 1}
  //       >
  //         Next
  //         {theme.direction === 'rtl' ? (
  //           <KeyboardArrowLeft />
  //         ) : (
  //           <KeyboardArrowRight />
  //         )}
  //       </Button>
  //     }
  //     backButton={
  //       <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
  //         {theme.direction === 'rtl' ? (
  //           <KeyboardArrowRight />
  //         ) : (
  //           <KeyboardArrowLeft />
  //         )}
  //         Back
  //       </Button>
  //     }
  //   />
  // </Box>
  )
}

export default Speciality