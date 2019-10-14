import React from 'react';
import { storiesOf } from '@storybook/react';

import card from './card.twig'
const cardTwig = (
  card({
    card__image__src: 'https://placeimg.com/1280/720/nature',
    card__image__alt: 'This is the card image\'s alt text',
    card__image__output_image_tag: true,
    card__heading: 'This is the card heading',
    card__subheading: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus',
    card__body: 'ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    card__link__text: 'Read more about this card',
    card__link__url: '#'
  })
)

const cardBgTwig = (
  card({
    card__modifiers: ['bg'],
    card__image__src: 'https://placeimg.com/1280/720/nature',
    card__image__alt: 'This is the card image\'s alt text',
    card__image__output_image_tag: true,
    card__heading: 'This is the card-bg heading',
    card__subheading: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus',
    card__body: 'ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    card__link__text: 'Read more about this card',
    card__link__url: '#'
  })
)

/**
 * Add storybook definition for Cards.
 */
storiesOf('Molecules/Cards', module)
  .add('card', () =>
    <div dangerouslySetInnerHTML={{__html: cardTwig}}></div>
  )
  .add('card with background', () =>
    <div dangerouslySetInnerHTML={{__html: cardBgTwig}}></div>
  )
