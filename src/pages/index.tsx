

import { DiscoverIcon } from "@/components/icons/discover";
import { StarIcon } from "@/components/icons/star";
import { MicIcon } from "@/components/icons/mic";
import { VideoIcon } from "@/components/icons/video";
import Nav from "@/components/nav";
import { Button, Flex, Text, Image, SimpleGrid,  Accordion,
      AccordionItem,
      AccordionButton,
      AccordionPanel,
      AccordionIcon, 
      Box,
} from "@chakra-ui/react";
import Avatar from "@/components/hero/Avatar";
import { LeftArrowIcon } from "@/components/icons/leftArrow";
import { RightArrowIcon } from "@/components/icons/rightArrow";
import FaqAccord from "@/components/FaqAccord";
import { CheckCircleIcon } from "@/components/icons/checkCircle";
import Logo from "@/components/nav/Logo";
import { LinkedIcon } from "@/components/icons/linkedin";
import { TwitterIcon } from "@/components/icons/twitter";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagrmIcon } from "@/components/icons/instagram";
import { GithubIcon } from "@/components/icons/github";
import { YoutubeIcon } from "@/components/icons/youtube";
import { MonitorIcon } from "@/components/icons/monitor";
import { FaceIcon } from "@/components/icons/face";
import { MessageIcon } from "@/components/icons/message";
import { SettingsIcon } from "@/components/icons/settings";
import { RecordingIcon } from "@/components/icons/recording";
import { CalendarIcon } from "@/components/icons/calendar";
import { LockIcon } from "@/components/icons/lock";


export default function Home() {
      const faqss=[
            {
                  title: 'How many participants can join a ClearLink video conference?',
                  content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
            },
            {
                  title: 'Can I use ClearLink on multiple devices?',
                  content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
            },
            {
                  title: 'Is ClearLink compatible with other video conferencing platforms?',
                  content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
            },
            {
                  title: 'How does ClearLink ensure the security of my video conferences?',
                  content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
            },
            {
                  title: 'Do I need to download any software to use ClearLink?',
                  content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
            },
            {
                  title: 'What kind of customer support does ClearLink provide?',
                  content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
            },

      ]
  return (
      <Flex 
            w='100%' 
            
      >

            <Flex >
                  <Flex w='100%'  direction='column' justifyContent='center'>
                  <Flex 
                  w='100%' 
                  direction='column' 
                  justifyContent='center'
                  backgroundImage={'../../assets/images/backgroundPattern.png'} 
                  backgroundSize="cover"
                  backgroundPosition="50% 50%"
                  p='40px 128px'
                  >
                  <Nav/>
                  {/* hero */}
                  <Flex w='100%' p='160px 32px 96px' gap='3%'>
                        <Flex w='55%' gap='24px' direction='column' justifyContent='flex-start'>
                              <Text wordBreak='break-all' justifySelf='left' as='h2' fontSize='58px' fontFamily='heading' fontWeight='600' color='gray.800' lineHeight='60px' letterSpacing='-1.28px'>Uniting the world, one video call at a time</Text>
                              <Flex w='85%'>
                                    <Text  wordBreak='break-all' fontSize='19px' fontFamily='heading' fontWeight='400' color='gray.500' lineHeight='32px' >Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</Text>
                              </Flex>
                              <Flex mt='24px' h='60px' >
                              <Button variant='primary' p='16px 28px'>Start your free trial</Button>
                              <Button variant='NoOutlinePrimary' p='16px 28px' leftIcon={<DiscoverIcon/>}>Discover AI assistant</Button>
                              </Flex>
                              <Flex mt='24px' h='40px'>
                              <Flex>
                                    <Image src='../../assets/images/avatar_group.png' alt='reviewsa'/>
                              </Flex>
                              <Flex direction='column' justifyContent='center' alignItems='center'>
                                    <Flex gap='8px' justifyContent='center' alignItems='center'>
                                          <Flex gap='4px'>
                                          {
                                                [1,1,1,1,1].map((value, index)=>(
                                                      <StarIcon boxSize='20px'/>
                                                
                                                ))
                                          }
                                          </Flex>
                                          <Text fontFamily='header' fontSize='16px' fontWeight='600' color='gray.700'>5.0</Text>
                                    </Flex>
                                    <Text fontFamily='header' fontSize='16px' fontWeight='500' color='gray.600'>from 3,000+ reviews</Text>
                                    
                              </Flex>
                              </Flex>
                        </Flex>
                        <Flex direction='column' w='45%'   p='32px' bg='blue.50' borderRadius='16px' border='1px solid var(--Blue-200, #B2DDFF);' boxShadow='0px 32px 64px -12px rgba(16, 24, 40, 0.14)' gap='40px'>
                              
                                    <SimpleGrid columns={3} spacing='15px'>   
                                          <Avatar bg='orange.300' imageUrl="../../assets/images/image21.png"/>
                                          <Avatar bg='primary.300' imageUrl="../../assets/images/image100.png"/>
                                          <Avatar bg='moss.300' imageUrl="../../assets/images/image8.png"/>
                                          <Avatar bg='blue.300' imageUrl="../../assets/images/image72.png"/>
                                          <Avatar bg='warning.300' imageUrl="../../assets/images/image108.png"/>
                                          <Avatar bg='ross.300' imageUrl="../../assets/images/image103.png"/>
                                    </SimpleGrid>
            
                                    <Flex w='100%' justifyContent='center' gap='16px'>
                                          <Flex boxSize='44px' justifyContent='center' alignItems='center' bg='white.100' borderRadius='100px' cursor='pointer'>
                                                <MicIcon size='20px' color='blue.700'/>
                                          </Flex>
                                          <Flex boxSize='44px' justifyContent='center' alignItems='center' bg='white.100' borderRadius='100px' cursor='pointer'>
                                                <VideoIcon size='20px' color='blue.700'/>
                                          </Flex>
                                          <Flex boxSize='44px' justifyContent='center' alignItems='center' bg='white.100' borderRadius='100px' cursor='pointer'>
                                                <MonitorIcon size='20px' color='blue.700'/>
                                          </Flex>
                                          <Flex boxSize='44px' justifyContent='center' alignItems='center' bg='white.100' borderRadius='100px' cursor='pointer'>
                                                <FaceIcon size='20px' color='blue.700'/>
                                          </Flex>
                                          <Flex boxSize='44px' justifyContent='center' alignItems='center' bg='white.100' borderRadius='100px' cursor='pointer'>
                                                <MessageIcon size='20px' color='blue.700'/>
                                          </Flex>
                                          <Flex boxSize='44px' justifyContent='center' alignItems='center' bg='white.100' borderRadius='100px' cursor='pointer'>
                                                <SettingsIcon size='20px' color='blue.700'/>
                                          </Flex>
                                          
                                    </Flex>
                        </Flex>

                  </Flex>
                </Flex>
                  {/* hero end */}
                  <Flex p='96px 146px' w='100%' justifyContent='center' alignItems='center' gap='48px' direction='column'>
                        <Text fontSize='20px' fontWeight='500' color='grey.600' fontFamily='heading'>Join 1,500+ companies already video conferencing the ClearLink way</Text>
                        <Flex w='100%' gap='69px' h='42px' overflow='hidden' justifyContent='center' alignItems='center' >
                              <Image src='../../assets/images/Shopify.svg' alt='' objectFit='cover' height='43px'/>
                              <Image src='../../assets/images/Coinbase.svg' alt='' objectFit='cover'/>
                              <Image src='../../assets/images/Dropbox.svg' alt='' objectFit='cover'/>
                              <Image src='../../assets/images/Intercom.svg' alt='' objectFit='cover'/>
                              <Image src='../../assets/images/Marvel.svg' alt='' objectFit='cover'/>
                              <Image src='../../assets/images/Automatic.svg' alt='' objectFit='cover'/>
                        </Flex>
                  </Flex>
                  {/* advert end */}
                  <Flex p='96px 160px' justifyContent='center' alignItems='flex-start' direction='column'>
                        <Flex w='56%' gap='12px' direction='column' justifyContent='center' alignItems='flex-start'>
                              <Text color='blue.700' fontSize='18px' fontWeight='600'>The ClearLink Advantage</Text>
                              <Text color='gray.800' fontSize='48px' fontWeight='600'>Why choose ClearLink?</Text>
                              <Flex mt='20px' alignItems='center'>
                                    <Text color='gray.500' fontSize='24px' fontWeight='400' wordBreak='break-all'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</Text>
                              </Flex>
                        </Flex>
                        <Flex mt='80px' justifyContent='space-between' gap='5%'>
                              <Flex w='56%'>
                              <SimpleGrid columns={2} spacing='40px'> 
                                    <Flex  justifyContent='flex-start' direction='column'>
                                          <Flex boxSize='56px' justifyContent='center' alignItems='center' bg='gray.50' borderRadius='100px'>
                                                <VideoIcon size='24px' color='blue.700'/>
                                          </Flex>
                                          <Text wordBreak='break-all' color='gray.900' fontSize='24px' fontWeight='600'>Crystal-clear HD video</Text>
                                          <Text  color='gray.600' fontSize='18px' fontWeight='400'>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</Text>         
                                    </Flex>
                                    <Flex  justifyContent='flex-start' direction='column'>
                                          <Flex boxSize='56px' justifyContent='center' alignItems='center' bg='gray.50' borderRadius='100px'>
                                                <RecordingIcon size='24px' color='blue.700'/>
                                          </Flex>
                                          <Text wordBreak='break-all' color='gray.900' fontSize='24px' fontWeight='600'>Noise-canceling audio</Text>
                                          <Text  color='gray.600' fontSize='18px' fontWeight='400'>Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</Text>         
                                    </Flex>
                                    <Flex  justifyContent='flex-start' direction='column'>
                                          <Flex boxSize='56px' justifyContent='center' alignItems='center' bg='gray.50' borderRadius='100px'>
                                                <CalendarIcon size='24px' color='blue.700'/>
                                          </Flex>
                                          <Text wordBreak='break-all' color='gray.900' fontSize='24px' fontWeight='600'>Scheduling made easy</Text>
                                          <Text  color='gray.600' fontSize='18px' fontWeight='400'>Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</Text>         
                                    </Flex>
                                    <Flex  justifyContent='flex-start' direction='column'>
                                          <Flex boxSize='56px' justifyContent='center' alignItems='center' bg='gray.50' borderRadius='100px'>
                                                <LockIcon size='24px' color='blue.700'/>
                                          </Flex>
                                          <Text wordBreak='break-all' color='gray.900' fontSize='24px' fontWeight='600'>Bank-grade security</Text>
                                          <Text  color='gray.600' fontSize='18px' fontWeight='400'>Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</Text>         
                                    </Flex>
                              </SimpleGrid>
                              </Flex>
                              <Flex position='relative'  h='527px'>
                                    <Image src='../../assets/images/RectangleImage.png' alt='why choose clearlink image' objectFit='contain'/>
                                    <Flex position='absolute' top='-200px' left='50px'>
                                          <Image src='../../assets/images/HandArrow.png' alt='hand arrow' objectFit='contain'/>
                                    </Flex>
                              </Flex>
                        </Flex>
                  </Flex>
                  {/* clearlink end */}
                  <Flex  p='96px 160px' justifyContent='space-between' alignItems='flex-start'  bg='gray.50' gap='64px'>
                        <Flex direction='column' gap='48px' alignItems='flex-start' justifyContent='flex-start' w='45%'>
                              <Image src='../../assets/images/Shopify.svg' alt='' objectFit='cover' height='32px'/>

                              <Flex gap='4px'>
                                    {
                                          [1,1,1,1,1].map((value, index)=>(
                                                <StarIcon boxSize='20px'/>
                                          
                                          ))
                                    }
                              </Flex>
                              <Text color='gray.900' fontSize='32px' fontWeight='500'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</Text>
                              <Flex w='100%' justifyContent='space-between' alignItems='center'>
                                    <Flex gap='16px'>
                                          <Flex boxSize='56px' rounded='200px' border='0.75px solid #175CD3'>
                                                <Image src='../../assets/images/Sharah.png' alt='' objectFit='cover' height='56px' width='56px'/>
                                          </Flex>
                                          <Flex direction='column'>
                                                <Text fontSize='20px' fontWeight='600' color='gray.900'>Sarah Thompson</Text>
                                                <Text fontSize='18px' fontWeight='400' color='gray.600'>Project Manager, Shopify</Text>
                                          </Flex>
                                    </Flex>
                                    <Flex gap='32px' justifyContent='center' alignItems='center'>
                                          <Flex boxSize='56px' rounded='28px' bg='white.100' justifyContent='center' alignItems='center' cursor='pointer'>
                                                <LeftArrowIcon boxSize='24px' color='blue.700'/>
                                          </Flex>
                                          <Flex boxSize='56px' rounded='28px' bg='white.100' justifyContent='center' alignItems='center' cursor='pointer'>
                                                <RightArrowIcon boxSize='24px' color='blue.700'/>
                                          </Flex>
                                    </Flex>
                        </Flex>
                        </Flex>
                        <Flex h='496px'>
                              <Image src='../../assets/images/Contents.png' alt='content'/>
                        </Flex>
                        
                  </Flex>
                  {/* shopify */}
                  <Flex gap='96px' justifyContent='flex-start' p='96px 160px'>
                        <Flex direction='column' gap='12px' w='39%'>
                              <Text color='blue.700' fontSize='18px' fontWeight='600'>Support</Text>
                              <Text color='gray.800' fontSize='48px' fontWeight='600'>FAQs</Text>
                              <Flex mt='8px'>
                                    <Text color='gray.500' fontSize='24px' fontWeight='400'>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <Text textDecoration='underline' cursor='pointer'>chat to our friendly team.</Text></Text>
                              </Flex>
                        </Flex>
                        <Flex w='54%' p='32px' direction='column'>
                              {
                                    faqss.map((value, index)=>(
                                          <>
                                                <FaqAccord title={value.title} content={value.content}/>
                                          </>
                                    ))
                              }
                             
                        </Flex>
                  </Flex>
                  {/* faq end */}
                  <Flex p='96px 0px 96px 160px' gap='125px' justifyContent='flex-start'>
                        <Flex direction='column' gap='32px' w='41%'>
                              <Text color='gray.900' fontSize='48px' fontWeight='600'>Ready to clear the path to perfect communication?</Text>
                              <Flex direction='column' gap='20px'>
                                    <Flex gap='12px' justifyContent='flex-start' alignItems='center'>
                                          <CheckCircleIcon boxSize='24px' color='blue.700'/>
                                          <Text fontSize='24px' fontWeight='400' color='gray.600'>30 days free trial</Text>
                                    </Flex>
                                    <Flex gap='12px' justifyContent='flex-start' alignItems='center'>
                                          <CheckCircleIcon boxSize='24px' color='blue.700'/>
                                          <Text fontSize='24px' fontWeight='400' color='gray.600'>Cancel at any time</Text>
                                    </Flex>
                                    <Flex gap='12px' justifyContent='flex-start' alignItems='center'>
                                          <CheckCircleIcon boxSize='24px' color='blue.700'/>
                                          <Text fontSize='24px' fontWeight='400' color='gray.600'>Access to all features</Text>
                                    </Flex>
                                    <Flex gap='12px'  justifyContent='flex-start' alignItems='center'>
                                          <CheckCircleIcon boxSize='24px' color='blue.700'/>
                                          <Text fontSize='24px' fontWeight='400' color='gray.600'>Peronalized onboarding</Text>
                                    </Flex>
                              </Flex>
                              <Flex mt='8px' gap='8px'>
                                    <Button variant='OutlineBlack' fontSize='16px' fontWeight='600' borderRadius='100px'>Talk to sales</Button>
                                    <Button variant='primary' fontSize='16px' fontWeight='600' borderRadius='100px'>Start your free trial</Button>
                              </Flex>
                        </Flex>
                        <Flex overflow='auto' >
                              <Image src='../../assets/images/communication.png' alt='communication' objectFit='contain'/>
                        </Flex>
                  </Flex>
                  {/* communication end */}
                  <Flex p='96px 160px'  justifyContent='space-between' alignItems='flex-start'>
                        <Flex w='28%' gap='32px' direction='column' justifyContent='flex-start'>
                              <Flex justifyContent='flex-start'>
                                    <Logo/>
                              </Flex>
                              <Text color='gray.600' fontSize='18px' fontWeight='400'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</Text>
                        </Flex>
                        <Flex direction='column' gap='16px'>
                              <Text fontSize='16px' fontWeight='600' color='gray.500'>Product</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Overview</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Features</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Solutions</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Tutorials</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Pricing</Text>
                        </Flex>
                        <Flex direction='column' gap='16px'>
                              <Text fontSize='16px' fontWeight='600' color='gray.500'>Company</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>About us</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Careers</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Press</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>News</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Contract</Text>
                        </Flex>
                        <Flex direction='column' gap='16px'>
                              <Text fontSize='16px' fontWeight='600' color='gray.500'>Resources</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Blog</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Events</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Help centre</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Tutorials</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Support</Text>
                        </Flex>
                        <Flex direction='column' gap='16px'>
                              <Text fontSize='16px' fontWeight='600' color='gray.500'>Legal</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Terms</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Privacy</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Cookies</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Licences</Text>
                              <Text fontSize='16px' fontWeight='600' color='gray.600' cursor='pointer'>Contact</Text>
                        </Flex>
                        <Flex direction='column' gap='16px' justifyContent='flex-start'>
                              <Text fontSize='16px' fontWeight='600' color='blue.700'>Get the app</Text>
                              <Flex h='40px' w='135px' cursor='pointer'>
                                    <Image src='../../assets/images/Mobile2.png' alt='apple' objectFit='contain'/>
                              </Flex>
                              <Flex h='40px' w='135px' cursor='pointer'>
                                    <Image src='../../assets/images/Mobile1.png' alt='apple' objectFit='contain'/>
                              </Flex>
                        </Flex>
                  </Flex>
                  {/* footer end */}
                  <Flex w='100%' p='48px 160px' w='100%' bg='gray.50' justifyContent='space-between' alignItems='center'>
                        <Text fontSize='16px' fontWeight='400' color='gray.500'>© 2023 ClearLink. All rights reserved.</Text>
                        <Flex gap='24px'>
                              <LinkedIcon boxSize='24px' cursor='pointer'/>
                              <TwitterIcon boxSize='24px' cursor='pointer'/>
                              <FacebookIcon boxSize='24px' cursor='pointer'/>
                              <InstagrmIcon boxSize='24px' cursor='pointer'/>
                              <GithubIcon boxSize='24px' cursor='pointer'/>
                              <YoutubeIcon boxSize='24px' cursor='pointer'/>
                        </Flex>
                  </Flex>
                  </Flex>
            </Flex>
      </Flex>
  )
}

