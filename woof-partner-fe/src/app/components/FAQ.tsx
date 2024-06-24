"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Qna {
  question: string,
  ans: string
}

const qnans: Qna[] = [
  {
    "question": "What is the purpose of this site?",
    "ans": "The purpose of our site is to help dog owners find suitable companions for their dogs, whether for playdates, socializing, or even breeding."
  },
  {
    "question": "How do I create a profile for my dog?",
    "ans": "To create a profile, sign up with your email, provide details about your dog (such as breed, age, size, temperament), and upload some photos. Once completed, you can start browsing for potential matches."
  },
  {
    "question": "Is this site only for breeding purposes?",
    "ans": "No, this site is for all types of canine companionship. Whether you're looking for a playmate, a walking buddy, or a breeding partner for your dog, you can find suitable matches here."
  },
  {
    "question": "How do I search for a match?",
    "ans": "After creating a profile, you can use our search filters to find dogs that match your preferences in terms of breed, age, size, and other characteristics. You can also see if they are looking for playdates, socialization, or breeding."
  },
  {
    "question": "How can I contact other dog owners?",
    "ans": "Once you find a match, you can send a message through our secure messaging system. This allows you to arrange meetups and get to know other dog owners without sharing personal contact information initially."
  },
  {
    "question": "Is the information on my profile visible to everyone?",
    "ans": "Only registered users can see your dog’s profile. We take privacy seriously and ensure that personal information is protected. You can control what details are shared publicly."
  },
  {
    "question": "How do I ensure the safety of my dog during meetups?",
    "ans": "We recommend meeting in public places for the first few interactions, such as dog parks or open spaces. Always keep your dog on a leash until you are comfortable with the other dog and owner. We also suggest bringing a friend along for added safety."
  },
  {
    "question": "Can I report inappropriate behavior or matches?",
    "ans": "Yes, if you encounter any inappropriate behavior or feel uncomfortable with a match, you can report it using the report function on the site. Our team will review and take necessary action."
  },
  {
    "question": "Is there a cost to use this site?",
    "ans": "Basic membership is free, which allows you to create a profile and search for matches. We will also offer premium memberships with additional features such as advanced search filters, unlimited messaging, and priority support. Currently it is absolute free."
  },
  {
    "question": "Can I delete my dog's profile?",
    "ans": "Yes, you can delete your profile at any time by going to 'Account Settings' and selecting 'Delete Profile.' Please note that this action is irreversible."
  },
  {
    "question": "How do I edit my dog's profile?",
    "ans": "You can edit your dog’s profile by logging in, going to your profile page, and clicking on the 'Edit Profile' button. Make the necessary changes and save them."
  },
  {
    "question": "What breeds are allowed on the site?",
    "ans": "All breeds are welcome! Our platform is designed to accommodate dogs of all shapes, sizes, and breeds."
  }
]

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        {qnans.map(({ question, ans }, idx) => (
          <Accordion
            expanded={expanded === ('panel' + idx)}
            onChange={handleChange('panel' + idx)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx}d-content`}
              id={`panel${idx}d-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                {ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}