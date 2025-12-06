# Design System Claro - Component Reference

> 📋 Referência rápida de componentes do Mondrian React para uso com Claude Code e outras IAs
> 
> **Instalação:** `yarn add mondrian-react` ou `npm install mondrian-react`

## 📑 Índice

- [Accordion](#accordion)
- [Alert](#alert)
- [Banner](#banner)
- [BrandGroup](#brandgroup)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [Calendar](#calendar)
- [Card](#card)
- [CardGroup](#cardgroup)
- [Checkbox](#checkbox)
- [Collapse](#collapse)
- [CollapseMap](#collapsemap)
- [Content](#content)
- [CopyContainer](#copycontainer)
- [Countdown](#countdown)
- [Divider](#divider)
- [FloatingSaleButton](#floatingsalebutton)
- [Footer](#footer)
- [Grid](#grid)
- [Header](#header)
- [Help](#help)
- [Image](#image)
- [Input](#input)
- [Link](#link)
- [Linklist](#linklist)
- [Menu](#menu)
- [Modal](#modal)
- [Multimedia](#multimedia)
- [Pagination](#pagination)
- [Price](#price)
- [ProgressBar](#progressbar)
- [Radio](#radio)
- [Rating](#rating)
- [ShortCut](#shortcut)
- [Shortcut](#shortcut)
- [SkipLink](#skiplink)
- [SpinBox](#spinbox)
- [Spinner](#spinner)
- [Stepper](#stepper)
- [Swiper](#swiper)
- [TabSelect](#tabselect)
- [Tag](#tag)
- [Text](#text)
- [Toggle](#toggle)
- [Tooltip](#tooltip)
- [Tooltipo](#tooltipo)
- [Topic](#topic)
- [TopicDetails](#topicdetails)

---

## Accordion

**Import:**
```jsx
import { Accordion } from 'mondrian-react';
import { Text } from 'mondrian-react';
```

### Normal

```jsx
<Accordion
  data={[
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    },
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    },
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    }
  ]}
 />
```

### Normal Icon

```jsx
<Accordion
  data={[
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" sm>Title content in here</Text>
    },
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" sm>Title content in here</Text>
    },
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" sm>Title content in here</Text>
    }
  ]}
 />
```

### Normal Inverse

```jsx
<Accordion
  data={[
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    },
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    },
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    }
  ]}
  inverse
/>
```

### Normal Inverse Icon

```jsx
<Accordion
  data={[
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" iconInverse inverse sm>Title content in here</Text>
    },
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" iconInverse inverse sm>Title content in here</Text>
    },
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" iconInverse inverse sm>Title content in here</Text>
    }
  ]}
  inverse
/>
```

### Single

```jsx
<Accordion
  data={[
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    }
  ]}
  single
/>
```

### Single Icon

```jsx
<Accordion
  data={[
    {
      content: <Text body>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" sm>Title content in here</Text>
    }
  ]}
  single
/>
```

### Inverse

```jsx
<Accordion
  data={[
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: 'Título do conteúdo aqui'
    }
  ]}
  inverse
  single
/>
```

### Inverse Icon

```jsx
<Accordion
  data={[
    {
      content: <Text body inverse>No final do dia, daqui para frente, um novo normal que evoluiu.</Text>,
      title: <Text icon="faq" iconInverse inverse sm>Title content in here</Text>
    }
  ]}
  inverse
  single
/>
```

---

## Alert

### Success Light

```jsx
<Alert
  light
  success
>
  <Text
    icon="checkbox-circulo"
    sm
  >
    Texto da mensagem de sucesso.
  </Text>
</Alert>
```

### Success Dark

```jsx
<Alert
  dark
  success
>
  <Text
    icon="checkbox-circulo"
    sm
  >
    Texto da mensagem de sucesso.
  </Text>
</Alert>
```

### Error Light

```jsx
<Alert
  error
  light
>
  <Text
    icon="checkbox-circulo"
    sm
  >
    Texto da mensagem de sucesso.
  </Text>
</Alert>
```

### Error Dark

```jsx
<Alert
  dark
  error
>
  <Text
    icon="checkbox-circulo"
    sm
  >
    Texto da mensagem de sucesso.
  </Text>
</Alert>
```

### Danger Light

```jsx
<Alert
  danger
  light
>
  <Text
    icon="checkbox-circulo"
    sm
  >
    Texto da mensagem de sucesso.
  </Text>
</Alert>
```

---

---

## Banner

### Normal

```jsx
<Banner
  flex
  href="#"
  id="banner-1"
  image={{
    alt: 'Descrição imagem desktop',
    src: 'https://www.claro.com.br/files/104379/1920x420/c4afc4bd1f/img-banner-basic-tv-v2-desk-2.jpg'
  }}
  imageMobile={{
    alt: 'Descrição imagem mobile',
    src: 'https://www.claro.com.br/files/104379/1536x1706/8380e93f86/img-basic-box-claro-tv-mais-mob.jpg'
  }}
  title="Ir para a planos"
/>
```

### Normal

```jsx
<Banner
  flex
  href="#"
  id="banner-1"
  image={{
    alt: 'Descrição imagem desktop',
    src: 'https://www.claro.com.br/files/104379/1920x420/c4afc4bd1f/img-banner-basic-tv-v2-desk-2.jpg'
  }}
  imageMobile={{
    alt: 'Descrição imagem mobile',
    src: 'https://www.claro.com.br/files/104379/1536x1706/8380e93f86/img-basic-box-claro-tv-mais-mob.jpg'
  }}
  title="Ir para a planos"
/>
```

---

---

## BrandGroup

### Default Sm

```jsx
<BrandGroup
  brands={[
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    }
  ]}
  sm
/>
```

### Default Md

```jsx
<BrandGroup
  brands={[
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    }
  ]}
  md
/>
```

### Default Lg

```jsx
<BrandGroup
  brands={[
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    }
  ]}
  lg
/>
```

### Overlaid

```jsx
<BrandGroup
  brands={[
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    }
  ]}
  overlaid
/>
```

### Overlaid More Itens

```jsx
<BrandGroup
  brands={[
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    },
    {
      alt: 'facebook',
      isVisible: true,
      src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
    }
  ]}
  overlaid
/>
```

---

---

## Breadcrumb

### Desktop Default

```jsx
<Breadcrumb
  data={[
    {
      page: 'Previous Page',
      url: '#'
    },
    {
      page: 'Previous Page',
      url: '#'
    },
    {
      page: 'Previous Page',
      url: '#'
    },
    {
      page: 'Final Page',
      url: '#'
    }
  ]}
/>
```

### Mobile Default

```jsx
<Breadcrumb mobile>
  Voltar
</Breadcrumb>
```

### Mobile Default

```jsx
<Breadcrumb mobile>
  Voltar
</Breadcrumb>
```

---

---

## Button

### Primary

```jsx
<Button
  primary
>
  Button
</Button>
```

### Primary With Icon

```jsx
<Button
  iconName="download"
  iconText
  primary
>
  Button
</Button>
```

### Primary Disabled

```jsx
<Button
  disabled
  primary
>
  Button
</Button>
```

### Primary Inverse

```jsx
<Button
  primaryInverse
>
  Button
</Button>
```

### Primary Inverse With Icon

```jsx
<Button
  iconName="download"
  iconText
  primaryInverse
>
  Button
</Button>
```

---

---

## Calendar

### Normal

```jsx
<Calendar
  months={[
    'september'
  ]}
  selectedDay={4}
  selectedMonth="september"
  selectedYear={2021}
  unlockDays={[
    new Date('2021-09-04T03:00:00.000Z'),
    new Date('2021-09-05T03:00:00.000Z'),
    new Date('2021-09-06T03:00:00.000Z'),
    new Date('2021-09-07T03:00:00.000Z')
  ]}
  years={[
    2021,
    2020,
    2019
  ]}
/>
```

### Normal

```jsx
<Calendar
  months={[
    'september'
  ]}
  selectedDay={4}
  selectedMonth="september"
  selectedYear={2021}
  unlockDays={[
    new Date('2021-09-04T03:00:00.000Z'),
    new Date('2021-09-05T03:00:00.000Z'),
    new Date('2021-09-06T03:00:00.000Z'),
    new Date('2021-09-07T03:00:00.000Z')
  ]}
  years={[
    2021,
    2020,
    2019
  ]}
/>
```

---

---

## Card

### Public

```jsx
<Card
  actions={[
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Button global'
      },
      condition: 'Price condition',
      link: {
        arrow: false,
        className: 'adfadfadfasdfa',
        href: 'https://www.intagram.com',
        label: 'Link inline',
        tag: 'a',
        target: '_self'
      },
      price: {
        prefix: 'De R$ X.XXX,xx por:',
        price: '9.XXX,XX',
        suffix: 'em 10x no cartão'
      },
      radio: {
        children: 'Option 1',
        className: 'mdn-Radio-input',
        id: 'primary',
        name: 'some-name',
        value: 'fone'
      }
    },
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Button global'
      },
      condition: 'Price condition',
      link: {
        arrow: false,
        className: 'Link inline',
        href: 'https://www.twitter.com',
        label: 'Link Inline 2',
        tag: 'a',
        target: '_self'
      },
      price: {
        prefix: 'De R$ X.XXX,xx por:',
        price: '8.XXX,XX',
        suffix: 'em 10x no cartão'
      },
      radio: {
        children: 'Option 2',
        className: 'mdn-Radio-input',
        id: 'second',
        name: 'some-name',
        value: 'individual'
      }
    }
  ]}
  context={{
    children: 'Public',
    type: 'public'
  }}
  description={{
    children: 'Description above'
  }}
  detail={[
    {
      group: {
        value: 'Description'
      },
      label: 'Text Label'
    },
    {
      group: {
        icon: 'tv'
      },
      label: 'Text Label'
    },
    {
      group: {
        brandGroup: [
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
          },
          {
            alt: 'X',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
          },
          {
            alt: 'Facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
          },
          {
            alt: 'Netflix',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
          }
        ]
      },
      label: 'Text Label'
    }
  ]}
  heading={{
    children: 'Title above',
    tag: 'h2'
  }}
  id="id-card-1"
  tag={[
    {
      children: 'Tag Primary',
      color: 'primary',
      icon: 'descontos'
    }
  ]}
/>
```

### Enterprise

```jsx
<Card
  actions={[
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Button global'
      },
      condition: 'Price condition',
      link: {
        arrow: false,
        className: 'adfadfadfasdfa',
        href: 'https://www.intagram.com',
        label: 'Link inline',
        tag: 'a',
        target: '_self'
      },
      price: {
        prefix: 'De R$ X.XXX,xx por:',
        price: '9.XXX,XX',
        suffix: 'em 10x no cartão'
      },
      radio: {
        children: 'Option 1',
        className: 'mdn-Radio-input',
        id: 'primary',
        name: 'some-name',
        value: 'fone'
      }
    },
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Button global'
      },
      condition: 'Price condition',
      link: {
        arrow: false,
        className: 'Link inline',
        href: 'https://www.twitter.com',
        label: 'Link Inline 2',
        tag: 'a',
        target: '_self'
      },
      price: {
        prefix: 'De R$ X.XXX,xx por:',
        price: '8.XXX,XX',
        suffix: 'em 10x no cartão'
      },
      radio: {
        children: 'Option 2',
        className: 'mdn-Radio-input',
        id: 'second',
        name: 'some-name',
        value: 'individual'
      }
    }
  ]}
  context={{
    children: 'Enterprise',
    type: 'enterprise'
  }}
  description={{
    children: 'Description above'
  }}
  detail={[
    {
      group: {
        value: 'Description'
      },
      label: 'Text Label'
    },
    {
      group: {
        icon: 'tv'
      },
      label: 'Text Label'
    },
    {
      group: {
        brandGroup: [
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
          },
          {
            alt: 'X',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
          },
          {
            alt: 'Facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
          },
          {
            alt: 'Netflix',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
          }
        ]
      },
      label: 'Text Label'
    }
  ]}
  heading={{
    children: 'Title above',
    tag: 'h2'
  }}
  id="id-card-2"
  tag={[
    {
      children: 'Tag Primary',
      color: 'primary',
      icon: 'descontos'
    }
  ]}
/>
```

### Image

```jsx
<Card
  actions={[
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Button global'
      },
      condition: 'Price condition',
      link: {
        arrow: false,
        className: 'adfadfadfasdfa',
        href: 'https://www.intagram.com',
        label: 'Link inline',
        tag: 'a',
        target: '_self'
      },
      price: {
        prefix: 'De R$ X.XXX,xx por:',
        price: '9.XXX,XX',
        suffix: 'em 10x no cartão'
      },
      radio: {
        children: 'Option 1',
        className: 'mdn-Radio-input',
        id: 'primary',
        name: 'some-name',
        value: 'fone'
      }
    },
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Button global'
      },
      condition: 'Price condition',
      link: {
        arrow: false,
        className: 'Link inline',
        href: 'https://www.twitter.com',
        label: 'Link Inline 2',
        tag: 'a',
        target: '_self'
      },
      price: {
        prefix: 'De R$ X.XXX,xx por:',
        price: '8.XXX,XX',
        suffix: 'em 10x no cartão'
      },
      radio: {
        children: 'Option 2',
        className: 'mdn-Radio-input',
        id: 'second',
        name: 'some-name',
        value: 'individual'
      }
    }
  ]}
  context={{}}
  description={{
    children: 'Description above'
  }}
  detail={[
    {
      group: {
        value: 'Description'
      },
      label: 'Text Label'
    },
    {
      group: {
        icon: 'tv'
      },
      label: 'Text Label'
    },
    {
      group: {
        brandGroup: [
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
          },
          {
            alt: 'facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
          },
          {
            alt: 'X',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
          },
          {
            alt: 'Facebook',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
          },
          {
            alt: 'Netflix',
            isVisible: true,
            src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
          }
        ]
      },
      label: 'Text Label'
    }
  ]}
  heading={{
    children: 'Title above',
    tag: 'h2'
  }}
  id="id-card-3"
  image={{
    alt: 'claro',
    src: 'https://mondrian.claro.com.br/assets/placeholders/5-4.jpg'
  }}
  tag={[
    {
      children: 'Tag Primary',
      color: 'primary',
      icon: 'descontos'
    },
    {
      children: 'Tag Secondary',
      color: 'secondary',
      icon: 'verificado'
    }
  ]}
/>
```

### Multi

```jsx
<Card
  actions={[
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Assinar'
      },
      condition: 'Valor anual:',
      link: {
        arrow: false,
        className: 'adfadfadfasdfa',
        href: 'https://www.claro.com.br/',
        label: 'Mais detalhes',
        tag: 'a',
        target: '_self'
      },
      price: {
        price: '264,70'
      },
      radio: {
        children: 'Claro TV+ extra',
        className: 'mdn-Radio-input',
        id: 'primary',
        name: 'some-name',
        value: 'fone'
      }
    }
  ]}
  context={{
    children: 'Multi',
    type: 'public'
  }}
  detail={[
    {
      description: 'de Claro Fibra para sua residência',
      detail: [
        {
          group: {
            icon: 'casa-wifi'
          },
          label: 'Wi-Fi e instalação grátis'
        }
      ],
      icon: 'wifi',
      title: '600 MEGA'
    },
    {
      description: '10 GB bônus Namorados no plano Móvel',
      detail: [
        {
          group: {
            icon: 'celular-5g'
          },
          label: 'Whatsapp e ligações ilimitadas'
        },
        {
          group: {
            brandGroup: [
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/72px-default/instagram.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/72px-default/whatsapp.svg'
              }
            ]
          },
          label: 'Livre na franquia móvel'
        }
      ],
      icon: 'celular',
      title: '60 GB'
    },
    {
      description: '10 GB bônus Namorados no plano Móvel',
      detail: [
        {
          group: {
            icon: 'tv-mais'
          },
          label: 'Whatsapp e ligações ilimitadas'
        },
        {
          group: {
            brandGroup: [
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
              },
              {
                alt: 'X',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
              },
              {
                alt: 'Facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
              },
              {
                alt: 'Netflix',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
              }
            ]
          },
          label: 'Livre na franquia móvel'
        }
      ],
      icon: 'tv',
      title: '60 GB'
    }
  ]}
  id="id-card-multi-1"
  multi
/>
```

### Multi

```jsx
<Card
  actions={[
    {
      button: {
        className: 'mdn-Button--block',
        href: '#',
        label: 'Assinar'
      },
      condition: 'Valor anual:',
      link: {
        arrow: false,
        className: 'adfadfadfasdfa',
        href: 'https://www.claro.com.br/',
        label: 'Mais detalhes',
        tag: 'a',
        target: '_self'
      },
      price: {
        price: '264,70'
      },
      radio: {
        children: 'Claro TV+ extra',
        className: 'mdn-Radio-input',
        id: 'primary',
        name: 'some-name',
        value: 'fone'
      }
    }
  ]}
  context={{
    children: 'Multi',
    type: 'public'
  }}
  detail={[
    {
      description: 'de Claro Fibra para sua residência',
      detail: [
        {
          group: {
            icon: 'casa-wifi'
          },
          label: 'Wi-Fi e instalação grátis'
        }
      ],
      icon: 'wifi',
      title: '600 MEGA'
    },
    {
      description: '10 GB bônus Namorados no plano Móvel',
      detail: [
        {
          group: {
            icon: 'celular-5g'
          },
          label: 'Whatsapp e ligações ilimitadas'
        },
        {
          group: {
            brandGroup: [
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/72px-default/facebook.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/72px-default/instagram.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/72px-default/whatsapp.svg'
              }
            ]
          },
          label: 'Livre na franquia móvel'
        }
      ],
      icon: 'celular',
      title: '60 GB'
    },
    {
      description: '10 GB bônus Namorados no plano Móvel',
      detail: [
        {
          group: {
            icon: 'tv-mais'
          },
          label: 'Whatsapp e ligações ilimitadas'
        },
        {
          group: {
            brandGroup: [
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
              },
              {
                alt: 'facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
              },
              {
                alt: 'X',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
              },
              {
                alt: 'Facebook',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
              },
              {
                alt: 'Netflix',
                isVisible: true,
                src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
              }
            ]
          },
          label: 'Livre na franquia móvel'
        }
      ],
      icon: 'tv',
      title: '60 GB'
    }
  ]}
  id="id-card-multi-1"
  multi
/>
```

---

---

## CardGroup

### Default

```jsx
<CardGroup>
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      },
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
</CardGroup>
```

### Swiper Card Group

```jsx
<Swiper
  isCardGroup
  isMondrianVanilla
>
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      },
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
</Swiper>
```

### Swiper Card Group

```jsx
<Swiper
  isCardGroup
  isMondrianVanilla
>
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      },
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
</Swiper>
```

---

---

## Checkbox

### Default

```jsx
<Checkbox>
  Label
</Checkbox>
```

### Default Disabled

```jsx
<Checkbox
  disabled
>
  Label
</Checkbox>
```

### Inverse

```jsx
<Checkbox
  inverse
>
  Label
</Checkbox>
```

---

---

## Collapse

### Normal

```jsx
<Collapse title={<Text content md medium>Title content in here</Text>}>
  <LinkDetails
    data={[
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      }
    ]}
   />
</Collapse>
```

### Normal Icon

```jsx
<Collapse title={<Text icon="alerta" iconSecondary medium sm>Title content in here</Text>}>
  <LinkDetails
    data={[
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      }
    ]}
   />
</Collapse>
```

### Normal Inverse

```jsx
<Collapse
  inverse
  title={<Text content inverse md medium>Title content in here</Text>}
>
  <LinkDetails
    data={[
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      }
    ]}
    inverse
  />
</Collapse>
```

### Normal Inverse Icon

```jsx
<Collapse
  inverse
  title={<Text content icon="faq" inverse medium sm>Title content in here</Text>}
>
  <LinkDetails
    data={[
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      },
      {
        description: 'Este componente é um container que recebe outros componentes para exibição.',
        href: '#',
        title: 'Insira um componente Mondrian aqui'
      }
    ]}
    inverse
  />
</Collapse>
```

---

---

## CollapseMap

### Default

```jsx
<CollapseMap title="Mapa do site">
  <Text
    body
    inverse
  >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi maiores id molestiae, porro necessitatibus a in eius natus. Reiciendis, dolore quaerat temporibus maiores numquam corrupti quasi accusantium doloremque similique!
  </Text>
</CollapseMap>
```

### Enterprise

```jsx
<CollapseMap
  enterprise
  title="Mapa do site"
>
  <Text
    body
    inverse
  >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi maiores id molestiae, porro necessitatibus a in eius natus. Reiciendis, dolore quaerat temporibus maiores numquam corrupti quasi accusantium doloremque similique!
  </Text>
</CollapseMap>
```

### Enterprise

```jsx
<CollapseMap
  enterprise
  title="Mapa do site"
>
  <Text
    body
    inverse
  >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi maiores id molestiae, porro necessitatibus a in eius natus. Reiciendis, dolore quaerat temporibus maiores numquam corrupti quasi accusantium doloremque similique!
  </Text>
</CollapseMap>
```

---

---

## Content

### Right Top

```jsx
<Tooltip
  content
  isVisible
  rightTop
>
  <ul className="mdn-TopicDetails mdn-TopicDetails--brand">
    <li className="mdn-TopicDetails-group">
      <div className="mdn-Topic mdn-Topic--horizontal mdn-Topic--sm">
        <div className="mdn-Text mdn-Text--icon">
          <img
            alt="Brand image"
            className="mdn-Text-icon"
            src="https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg"
            title="your title"
          />
          <p>
            Topic brand
          </p>
        </div>
      </div>
    </li>
    <li className="mdn-TopicDetails-group">
      <div className="mdn-Topic mdn-Topic--horizontal mdn-Topic--sm">
        <div className="mdn-Text mdn-Text--icon">
          <img
            alt="Brand image"
            className="mdn-Text-icon"
            src="https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg"
            title="your title"
          />
          <p>
            Topic brand
          </p>
        </div>
      </div>
    </li>
    <li className="mdn-TopicDetails-group">
      <div className="mdn-Topic mdn-Topic--horizontal mdn-Topic--sm">
        <div className="mdn-Text mdn-Text--icon">
          <img
            alt="Brand image"
            className="mdn-Text-icon"
            src="https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg"
            title="your title"
          />
          <p>
            Topic brand
          </p>
        </div>
      </div>
    </li>
  </ul>
</Tooltip>
```

### Right Top

```jsx
<Tooltip
  content
  isVisible
  rightTop
>
  <ul className="mdn-TopicDetails mdn-TopicDetails--brand">
    <li className="mdn-TopicDetails-group">
      <div className="mdn-Topic mdn-Topic--horizontal mdn-Topic--sm">
        <div className="mdn-Text mdn-Text--icon">
          <img
            alt="Brand image"
            className="mdn-Text-icon"
            src="https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg"
            title="your title"
          />
          <p>
            Topic brand
          </p>
        </div>
      </div>
    </li>
    <li className="mdn-TopicDetails-group">
      <div className="mdn-Topic mdn-Topic--horizontal mdn-Topic--sm">
        <div className="mdn-Text mdn-Text--icon">
          <img
            alt="Brand image"
            className="mdn-Text-icon"
            src="https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg"
            title="your title"
          />
          <p>
            Topic brand
          </p>
        </div>
      </div>
    </li>
    <li className="mdn-TopicDetails-group">
      <div className="mdn-Topic mdn-Topic--horizontal mdn-Topic--sm">
        <div className="mdn-Text mdn-Text--icon">
          <img
            alt="Brand image"
            className="mdn-Text-icon"
            src="https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg"
            title="your title"
          />
          <p>
            Topic brand
          </p>
        </div>
      </div>
    </li>
  </ul>
</Tooltip>
```

---

---

## CopyContainer

### Básico

```jsx
<CopyContainer value="23793.38128 60001.40148295000.529206 8 77060000032219" />
```

### Básico

```jsx
<CopyContainer value="23793.38128 60001.40148295000.529206 8 77060000032219" />
```

---

---

## Countdown

### Sm

```jsx
<Countdown
  endDate={new Date("2021-09-04T03:01:00.000Z")}
  sm
  startDate={new Date("2021-09-04T03:00:00.000Z")}
  title="SM - Acaba em:"
/>
```

### Md

```jsx
<Countdown
  endDate={new Date("2021-09-04T03:01:00.000Z")}
  md
  startDate={new Date("2021-09-04T03:00:00.000Z")}
  title="MD - Acaba em:"
/>
```

### Lg

```jsx
<Countdown
  endDate={new Date("2021-09-04T03:01:00.000Z")}
  lg
  startDate={new Date("2021-09-04T03:00:00.000Z")}
  tag="LG - Ofertas Imperdíveis"
  title="Acaba em:"
/>
```

### Block

```jsx
<Countdown
  block
  endDate={new Date("2021-09-04T03:01:00.000Z")}
  startDate={new Date("2021-09-04T03:00:00.000Z")}
  title="BLOCK - Acaba em:"
/>
```

### Block

```jsx
<Countdown
  block
  endDate={new Date("2021-09-04T03:01:00.000Z")}
  startDate={new Date("2021-09-04T03:00:00.000Z")}
  title="BLOCK - Acaba em:"
/>
```

---

---

## Divider

### Horizontal

```jsx
<Divider
/>
```

### Horizontal Inverse

```jsx
<Divider inverse />
```

### Horizontal Dark

```jsx
<Divider dark />
```

### Vertical

```jsx
<Divider
  vertical
/>
```

### Vertical Dark

```jsx
<Divider
  dark
  vertical
/>
```

---

---

## FloatingSaleButton

### Básico

```jsx
<FloatingSaleButton
  data={[
    {
      icon: 'fone-headset',
      text: 'Televendas: 0800 704 0475'
    },
    {
      hasArrow: true,
      icon: 'whatsapp',
      text: 'Pelo Whatsapp'
    },
    {
      hasArrow: true,
      icon: 'carrinho',
      text: 'Continuar por aqui'
    }
  ]}
  style={{
    marginTop: '300px',
    maxWidth: '300px'
  }}
>
  Contrate
</FloatingSaleButton>
```

### Básico

```jsx
<FloatingSaleButton
  data={[
    {
      icon: 'fone-headset',
      text: 'Televendas: 0800 704 0475'
    },
    {
      hasArrow: true,
      icon: 'whatsapp',
      text: 'Pelo Whatsapp'
    },
    {
      hasArrow: true,
      icon: 'carrinho',
      text: 'Continuar por aqui'
    }
  ]}
  style={{
    marginTop: '300px',
    maxWidth: '300px'
  }}
>
  Contrate
</FloatingSaleButton>
```

---

---

## Footer

### Public Simple

```jsx
<Footer
  data={{
    imageAlt: 'Logo customizado',
    imageSrc: 'https://mondrian.claro.com.br/brands/nosvg/assinatura-claro.png',
    privacy: [
      {
        href: '#',
        target: '_blank',
        text: 'Política de Privacidade'
      },
      {
        href: '#',
        target: '_blank',
        text: 'Portal de Privacidade'
      }
    ]
  }}
/>
```

### Public Social

```jsx
<Footer
  data={{
    imageAlt: 'Logo customizado',
    imageSrc: 'https://mondrian.claro.com.br/brands/nosvg/assinatura-claro.png',
    privacy: [
      {
        href: '#',
        target: '_blank',
        text: 'Política de Privacidade'
      },
      {
        href: '#',
        target: '_blank',
        text: 'Portal de Privacidade'
      }
    ],
    social: [
      {
        'aria-label': 'Clique para acessar o Facebook de ClaroBrasil',
        href: 'https://www.facebook.com/clarobrasil',
        icon: 'facebook',
        title: 'Facebook de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar X, antigo Twitter de ClaroBrasil',
        href: 'https://twitter.com/clarobrasil',
        icon: 'twitter',
        title: 'Rede social X de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Instagram de ClaroBrasil',
        href: 'https://www.instagram.com/clarobrasil/',
        icon: 'instagram',
        title: 'Instagram de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Youtube de ClaroBrasil',
        href: 'https://www.youtube.com/user/ClaroBrasil',
        icon: 'youtube',
        title: 'Youtube de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Linkedin de ClaroBrasil',
        href: 'https://www.linkedin.com/company/clarobrasil',
        icon: 'linkedin',
        title: 'Linkedin de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Tik-tok de ClaroBrasil',
        href: 'https://www.tiktok.com/@clarobrasil',
        icon: 'tik-tok',
        title: 'Tik-tok de ClaroBrasil'
      }
    ]
  }}
/>
```

### Enterprise Simple

```jsx
<Footer
  data={{
    imageAlt: 'Logo customizado',
    imageSrc: 'https://mondrian.claro.com.br/brands/nosvg/assinatura-claro.png',
    privacy: [
      {
        href: '#',
        target: '_blank',
        text: 'Política de Privacidade'
      },
      {
        href: '#',
        target: '_blank',
        text: 'Portal de Privacidade'
      }
    ]
  }}
  enterprise
/>
```

### Enterprise Social

```jsx
<Footer
  data={{
    imageAlt: 'Logo customizado',
    imageSrc: 'https://mondrian.claro.com.br/brands/nosvg/assinatura-claro.png',
    privacy: [
      {
        href: '#',
        target: '_blank',
        text: 'Política de Privacidade'
      },
      {
        href: '#',
        target: '_blank',
        text: 'Portal de Privacidade'
      }
    ],
    social: [
      {
        'aria-label': 'Clique para acessar o Facebook de ClaroEmpresas',
        href: 'https://www.facebook.com/claroempresasbra',
        icon: 'facebook',
        title: 'Facebook de ClaroEmpresas'
      },
      {
        'aria-label': 'Clique para acessar o X, antigo Twitter de ClaroEmpresas',
        href: 'https://twitter.com/claroempbrasil',
        icon: 'twitter',
        title: 'Rede social X de ClaroEmpresas'
      },
      {
        'aria-label': 'Clique para acessar o Instagram de ClaroEmpresas',
        href: 'https://www.instagram.com/claroempresasbra/',
        icon: 'instagram',
        title: 'Instagram de ClaroEmpresas'
      },
      {
        'aria-label': 'Clique para acessar o Youtube de ClaroEmpresas',
        href: 'https://www.youtube.com/user/claroempresasbra',
        icon: 'youtube',
        title: 'Youtube de ClaroEmpresas'
      },
      {
        'aria-label': 'Clique para acessar o Linkedin de ClaroEmpresas',
        href: 'https://www.linkedin.com/company/claroempresasbra',
        icon: 'linkedin',
        title: 'Linkedin de ClaroEmpresas'
      }
    ]
  }}
  enterprise
/>
```

### Public Links

```jsx
<Footer
  data={{
    etc: <div style={{border: '1px dotted #fff', height: '100%', minHeight: '200px', padding: '12px', width: '100%'}}><p className="mdn-Text mdn-Text--body mdn-Text--sm mdn-Text--inverse" style={{marginBottom: '16px'}}>Espaço reservado para:</p><p className="mdn-Text mdn-Text--body mdn-Text--sm mdn-Text--inverse">- Selos{' '}<br /><br />- Download de apps<br /><br />- QR Codes</p><p className="mdn-Text mdn-Text--body mdn-Text--sm mdn-Text--inverse" style={{marginTop: '16px'}}>Você pode ocultar esta layer, mas sempre respeite o tamanho do espaço definido.</p></div>,
    imageAlt: 'Logo customizado',
    imageSrc: 'https://mondrian.claro.com.br/brands/nosvg/assinatura-claro.png',
    linkList: [
      {
        links: [
          {
            href: '#',
            title: 'Minha Claro'
          },
          {
            href: '#',
            title: 'Televendas'
          }
        ],
        title: 'Atalhos'
      },
      {
        links: [
          {
            href: '#',
            title: 'Item Atendimento 1'
          },
          {
            href: '#',
            title: 'Item Atendimento 2'
          },
          {
            href: '#',
            title: 'Item Atendimento 3'
          },
          {
            href: '#',
            title: 'Item Atendimento 4'
          }
        ],
        title: 'Atendimento'
      },
      {
        links: [
          {
            href: '#',
            title: 'Item Atendimento 1'
          },
          {
            href: '#',
            title: 'Item Atendimento 2'
          },
          {
            href: '#',
            title: 'Item Atendimento 3'
          },
          {
            href: '#',
            title: 'Item Atendimento 4'
          }
        ],
        title: 'Central'
      }
    ],
    privacy: [
      {
        href: '#',
        target: '_blank',
        text: 'Política de Privacidade'
      },
      {
        href: '#',
        target: '_blank',
        text: 'Portal de Privacidade'
      }
    ],
    social: [
      {
        'aria-label': 'Clique para acessar o Facebook de ClaroBrasil',
        href: 'https://www.facebook.com/clarobrasil',
        icon: 'facebook',
        title: 'Facebook de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar X, antigo Twitter de ClaroBrasil',
        href: 'https://twitter.com/clarobrasil',
        icon: 'twitter',
        title: 'Rede social X de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Instagram de ClaroBrasil',
        href: 'https://www.instagram.com/clarobrasil/',
        icon: 'instagram',
        title: 'Instagram de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Youtube de ClaroBrasil',
        href: 'https://www.youtube.com/user/ClaroBrasil',
        icon: 'youtube',
        title: 'Youtube de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Linkedin de ClaroBrasil',
        href: 'https://www.linkedin.com/company/clarobrasil',
        icon: 'linkedin',
        title: 'Linkedin de ClaroBrasil'
      },
      {
        'aria-label': 'Clique para acessar o Tik-tok de ClaroBrasil',
        href: 'https://www.tiktok.com/@clarobrasil',
        icon: 'tik-tok',
        title: 'Tik-tok de ClaroBrasil'
      }
    ]
  }}
/>
```

---

---

## Grid

### Default

```jsx
<Container>
  <Text
    body
    inverse
    style={{
      backgroundColor: 'var(--color-brand-primary-medium)'
    }}
  >
    Container has a limit and a default padding.
  </Text>
</Container>
```

### Container Default

```jsx
<Container>
  <Text
    body
    inverse
    style={{
      backgroundColor: 'var(--color-brand-primary-medium)'
    }}
  >
    Container has a limit and a default padding.
  </Text>
</Container>
```

### Row and Cols

```jsx
<Row>
  <Col sm={6}>
    <Text
      body
      inverse
      style={{
        backgroundColor: 'var(--color-brand-primary-medium)'
      }}
    >
      Ex: Col sm-6
    </Text>
  </Col>
  <Col sm={6}>
    <Text
      body
      inverse
      style={{
        backgroundColor: 'var(--color-brand-primary-medium)'
      }}
    >
      Ex: Col sm-6
    </Text>
  </Col>
</Row>
```

### Row and Cols

```jsx
<Row>
  <Col sm={6}>
    <Text
      body
      inverse
      style={{
        backgroundColor: 'var(--color-brand-primary-medium)'
      }}
    >
      Ex: Col sm-6
    </Text>
  </Col>
  <Col sm={6}>
    <Text
      body
      inverse
      style={{
        backgroundColor: 'var(--color-brand-primary-medium)'
      }}
    >
      Ex: Col sm-6
    </Text>
  </Col>
</Row>
```

---

---

## Header

### Simple

```jsx
<Header brandSrc="https://mondrian.claro.com.br/brands/horizontal/inverse/claro.svg" />
```

### Accessibility

```jsx
<Header
  data={{
    icons: [
      {
        'aria-label': 'acessibilidade',
        href: '#',
        icon: 'pcd',
        tagName: 'button',
        title: 'Saiba mais sobre acessibilidade'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tagName: 'button',
        title: 'Saiba mais sobre libras'
      },
      {
        'aria-label': 'contraste',
        href: 'https://google.com',
        icon: 'alto-contraste',
        tagName: 'a',
        title: 'Ativar modo contraste'
      }
    ]
  }}
 />
```

### Accessibility Search

```jsx
<Header
  data={{
    icons: [
      {
        'aria-label': 'acessibilidade',
        href: '#',
        icon: 'pcd',
        tagName: 'button',
        title: 'Saiba mais sobre acessibilidade'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tagName: 'button',
        title: 'Saiba mais sobre libras'
      },
      {
        'aria-label': 'contraste',
        href: 'https://google.com',
        icon: 'alto-contraste',
        tagName: 'a',
        title: 'Ativar modo contraste'
      }
    ],
    searchInputProps: {
      'aria-label': 'searchLabel',
      id: 'searchId',
      name: 'searchName'
    }
  }}
  search
/>
```

### Enterprise Simple

```jsx
<Header
  brandSrc="https://mondrian.claro.com.br/brands/horizontal/inverse/claro-empresas.svg"
  enterprise
/>
```

### Enterprise Accesibility

```jsx
<Header
  brandSrc="https://mondrian.claro.com.br/brands/horizontal/inverse/claro-empresas.svg"
  data={{
    icons: [
      {
        'aria-label': 'acessibilidade',
        href: '#',
        icon: 'pcd',
        tagName: 'button',
        title: 'Saiba mais sobre acessibilidade'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tagName: 'button',
        title: 'Saiba mais sobre libras'
      },
      {
        'aria-label': 'contraste',
        href: 'https://google.com',
        icon: 'alto-contraste',
        tagName: 'a',
        title: 'Ativar modo contraste'
      }
    ]
  }}
  enterprise
/>
```

---

---

## Help

### Password

```jsx
<HelpPassword
  data={[
    {
      isDone: true,
      requirement: 'Passo senha 1.'
    },
    {
      isDone: true,
      requirement: 'Passo senha 2.'
    },
    {
      isDone: true,
      requirement: 'Passo senha 3.'
    },
    {
      isDone: false,
      requirement: 'Passo senha 4.'
    },
    {
      isDone: false,
      requirement: 'Passo senha 5.'
    }
  ]}
>
  Titulo ajuda de senha
</HelpPassword>
```

### Password

```jsx
<HelpPassword
  data={[
    {
      isDone: true,
      requirement: 'Passo senha 1.'
    },
    {
      isDone: true,
      requirement: 'Passo senha 2.'
    },
    {
      isDone: true,
      requirement: 'Passo senha 3.'
    },
    {
      isDone: false,
      requirement: 'Passo senha 4.'
    },
    {
      isDone: false,
      requirement: 'Passo senha 5.'
    }
  ]}
>
  Titulo ajuda de senha
</HelpPassword>
```

---

---

## Image

### Aspect Ratio 3 2

```jsx
<Image
  alt="Image Alt"
  proportion-3-2
  src="https://mondrian.claro.com.br/assets/placeholders/3-2.jpg"
/>
```

### Aspect Ratio 5 4

```jsx
<Image
  alt="Image Alt"
  proportion-5-4
  src="https://mondrian.claro.com.br/assets/placeholders/5-4.jpg"
/>
```

### Aspect Ratio 1 1

```jsx
<Image
  alt="Image Alt"
  proportion-1-1
  src="https://mondrian.claro.com.br/assets/placeholders/1-1.jpg"
/>
```

### Aspect Ratio 3 4

```jsx
<Image
  alt="Image Alt"
  proportion-3-4
  src="https://mondrian.claro.com.br/assets/placeholders/3-4.jpg"
/>
```

### Aspect Ratio 1 2

```jsx
<Image
  alt="Image Alt"
  proportion-1-2
  src="https://mondrian.claro.com.br/assets/placeholders/1-2.jpg"
/>
```

---

---

## Input

### Text

```jsx
<Input
  multiple
  options={[
    {
      label: 'Selecione',
      value: ''
    },
    {
      label: 'Option 1',
      value: 'value1'
    },
    {
      label: 'Option 2',
      value: 'value2'
    },
    {
      label: 'Option 3',
      value: 'value3'
    }
  ]}
  select
>
  Select
</Input>
```

### Text Disabled

```jsx
<Input
  disabled
  text
>
  Texto
</Input>
```

### Text Inverse

```jsx
<Input
  inverse
  text
>
  Texto
</Input>
```

### Password

```jsx
<Input
  password
>
  Senha
</Input>
```

### Search

```jsx
<Input
  search
>
  Search
</Input>
```

---

---

## Link

### Arrow

```jsx
<Link
  arrow
  href="#"
>
  Link arrow
</Link>
```

### Arrow Inverse

```jsx
<Link
  arrow
  href="#"
  inverse
>
  Link arrow
</Link>
```

### With Icon Default

```jsx
<Link
  href="#"
  icon
  iconName="download-caixa"
>
  Link with icon
</Link>
```

### With Icon Inverse

```jsx
<Link
  href="#"
  icon
  iconName="download-caixa"
  inverse
>
  Link with icon
</Link>
```

### Inline

```jsx
<Link
  href="#"
  inline
>
  Link inline
</Link>
```

---

---

## Linklist

### Default

```jsx
<LinkList
  data={[
    {
      href: '#',
      title: 'Link 1'
    },
    {
      href: '#',
      title: 'Link 2'
    },
    {
      href: '#',
      title: 'Link 3'
    },
    {
      href: '#',
      title: 'Link 4'
    },
    {
      href: '#',
      title: 'Link 5'
    }
  ]}
/>
```

### Inverse

```jsx
<LinkList
  data={[
    {
      href: '#',
      title: 'Link 1'
    },
    {
      href: '#',
      title: 'Link 2'
    },
    {
      href: '#',
      title: 'Link 3'
    },
    {
      href: '#',
      title: 'Link 4'
    },
    {
      href: '#',
      title: 'Link 5'
    }
  ]}
  inverse
/>
```

### Inverse

```jsx
<LinkList
  data={[
    {
      href: '#',
      title: 'Link 1'
    },
    {
      href: '#',
      title: 'Link 2'
    },
    {
      href: '#',
      title: 'Link 3'
    },
    {
      href: '#',
      title: 'Link 4'
    },
    {
      href: '#',
      title: 'Link 5'
    }
  ]}
  inverse
/>
```

---

---

## Menu

### Public

```jsx
<Menu
  data={{
    buttonList: [
      {
        content: <><div className="mdn-Menu-subMenu"><ul className="mdn-Menu-subMenu-list mdn-Menu-shortcut"><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-shortcut-hat"><p className="mdn-Text mdn-Text--caption">Contrate online de forma rápida:</p></div><ul className="mdn-Menu-shortcut-list"><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 1</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 2</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 3</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 4</span></a></li></ul></li><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-shortcut-hat"><p className="mdn-Text mdn-Text--caption">Contrate online de forma rápida:</p></div><ul className="mdn-Menu-shortcut-list"><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 1</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 2</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 3</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 4</span></a></li></ul></li></ul></div></>,
        global: true,
        title: 'Contrate'
      },
      {
        content: <><div className="mdn-Menu-subMenu"><ul className="mdn-Menu-subMenu-list"><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-shortcut"><ul className="mdn-Menu-shortcut-list"><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Minha Claro móvel</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Minha Claro residencial</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Minha Claro residencial</span></a></li></ul></div></li></ul></div></>,
        primaryInverse: true,
        title: 'Minha Claro'
      }
    ],
    city: {
      content: <CitiesContent />,
      title: 'São Paulo / SP'
    },
    countries: [
      {
        alt: 'Argentina',
        href: 'https://www.claro.com.ar/',
        name: 'Argentina',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/argentina.svg'
      },
      {
        alt: 'Brasil',
        href: 'https://www.claro.com.br/',
        isCurrently: true,
        name: 'Brasil',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/brasil.svg'
      },
      {
        alt: 'Chile',
        href: 'https://www.clarochile.cl/',
        name: 'Chile',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/chile.svg'
      },
      {
        alt: 'Colômbia',
        href: 'http://www.claro.com.co/',
        name: 'Colômbia',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/colombia.svg'
      },
      {
        alt: 'Costa Rica',
        href: 'https://www.claro.cr/',
        name: 'Costa Rica',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/costa-rica.svg'
      },
      {
        alt: 'Equador',
        href: 'http://www.claro.com.ec/',
        name: 'Equador',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/equador.svg'
      },
      {
        alt: 'El Salvador',
        href: 'https://www.claro.com.sv/',
        name: 'El Salvador',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/el-salvador.svg'
      },
      {
        alt: 'Espanha',
        href: 'https://www.claro.com.es/',
        name: 'Espanha',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/espanha.svg'
      },
      {
        alt: 'Estados Unidos',
        href: 'https://www.usclaro.com/',
        name: 'Estados Unidos',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/estados-unidos.svg'
      },
      {
        alt: 'Guatemala',
        href: 'https://www.claro.com.gt/',
        name: 'Guatemala',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/guatemala.svg'
      },
      {
        alt: 'Honduras',
        href: 'https://www.claro.com.hn/',
        name: 'Honduras',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/honduras.svg'
      },
      {
        alt: 'Nicarágua',
        href: 'https://www.claro.com.ni/',
        name: 'Nicarágua',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/nicaragua.svg'
      },
      {
        alt: 'Panamá',
        href: 'https://www.claro.com.pa/',
        name: 'Panamá',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/panama.svg'
      },
      {
        alt: 'Paraguai',
        href: 'https://www.claro.com.py/',
        name: 'Paraguai',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/paraguai.svg'
      },
      {
        alt: 'Peru',
        href: 'https://www.claro.com.pe/',
        name: 'Peru',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/peru.svg'
      },
      {
        alt: 'Porto Rico',
        href: 'https://www.claropr.com/',
        name: 'Porto Rico',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/porto-rico.svg'
      },
      {
        alt: 'Rep. Dominicana',
        href: 'https://www.claro.com.do/',
        name: 'Rep. Dominicana',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/republica-dominicana.svg'
      },
      {
        alt: 'Uruguai',
        href: 'https://www.claro.com.uy/',
        name: 'Uruguai',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/uruguai.svg'
      }
    ],
    icons: [
      {
        'aria-label': 'pcd',
        href: '#',
        icon: 'pcd',
        tag: 'a'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tag: 'button'
      },
      {
        'aria-label': 'contraste',
        icon: 'alto-contraste',
        onClick: () => {},
        tag: 'button'
      }
    ],
    menuList: [
      {
        content: <div className="mdn-Menu-subMenu-list mdn-Menu-offerForm"><div className="mdn-offerForm-infos"><p className="mdn-Heading">Consulte ofertas disponíveis para você:</p><button className="mdn-Button mdn-Button--primary" title="Consultar Cep Automaticamente via Geolocalização" type="button">Consultar com localização atual</button><div className="mdn-Alert mdn-Alert--danger mdn-Alert--light mdn-isInitialized"><div className="mdn-Tag mdn-Tag--feedback"><div className="mdn-Alert-content"><span aria-hidden="true" className="mdn-Icon-informacao mdn-Icon--sm mdn-Tag-icon"/><p>Não foi possível capturar a sua localização. Por favor, revise as regras de permissão de seu navegador.</p></div></div></div></div><hr className="mdn-Divider mdn-Divider--horizontal mdn-Divider--default mdn-is-initialized" /><form action="https://planos.claro.com.br" aria-label="Confirme os campos de Cep e Número à seguir para consultar os combos diposníveis em sua região." className="mdn-offerForm" method="GET"><div className="mdn-Menu-inputGroup"><React.ForwardRef cep parentClassName="mdn-Col-xs-8">CEP</React.ForwardRef><React.ForwardRef number parentClassName="mdn-Col-xs-4">Número</React.ForwardRef></div><button className="mdn-Button mdn-Button--secondary mdn-Button--md" type="submit">Consultar neste endereço</button></form><div className="mdn-Link mdn-Link--arrow" data-test-id="linkArrow"><a className="mdn-Link-anchor" href="https://buscacepinter.correios.com.br/app/endereco/index.php" title="Caso não saiba o seu CEP, clique no botão e faça uma consulta no site dos Correios."><span className="mdn-Link-anchor-label">Não sei meu CEP{' '}</span><em className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div></div>,
        title: 'Combos'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Móvel'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Internet'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'TV & Streaming'
      },
      {
        href: '#',
        title: 'Fone'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Serviços Digitais'
      }
    ],
    segments: [
      {
        isActive: true,
        title: 'Para você'
      },
      {
        enterprises: [
          {
            href: '#',
            title: 'Pequenas e médias empresas'
          },
          {
            href: '#',
            title: 'Grandes empresas e Governo'
          }
        ],
        title: 'Para empresa'
      }
    ]
  }}
  public
  search
/>
```

### Public Enterprise

```jsx
<Menu
  data={{
    buttonList: [
      {
        content: <><div className="mdn-Menu-subMenu"><ul className="mdn-Menu-subMenu-list mdn-Menu-shortcut"><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-shortcut-hat"><p className="mdn-Text mdn-Text--caption">Contrate online de forma rápida:</p></div><ul className="mdn-Menu-shortcut-list"><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 1</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 2</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 3</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 4</span></a></li></ul></li><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-shortcut-hat"><p className="mdn-Text mdn-Text--caption">Contrate online de forma rápida:</p></div><ul className="mdn-Menu-shortcut-list"><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 1</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 2</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Card 3</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Card 4</span></a></li></ul></li></ul></div></>,
        global: true,
        title: 'Contrate'
      },
      {
        content: <><div className="mdn-Menu-subMenu"><ul className="mdn-Menu-subMenu-list"><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-shortcut"><ul className="mdn-Menu-shortcut-list"><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-celular mdn-Icon--md" /><span className="mdn-Text">Minha Claro móvel</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Minha Claro residencial</span></a></li><li className="mdn-Menu-shortcut-list-item"><a className="mdn-Menu-shortcut-list-item-link" href="#"><i className="mdn-Icon mdn-Icon-residencial mdn-Icon--md" /><span className="mdn-Text">Minha Claro residencial</span></a></li></ul></div></li></ul></div></>,
        primaryInverse: true,
        title: 'Minha Claro'
      }
    ],
    city: {
      content: <CitiesContent />,
      title: 'São Paulo / SP'
    },
    countries: [
      {
        alt: 'Argentina',
        href: 'https://www.claro.com.ar/',
        name: 'Argentina',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/argentina.svg'
      },
      {
        alt: 'Brasil',
        href: 'https://www.claro.com.br/',
        isCurrently: true,
        name: 'Brasil',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/brasil.svg'
      },
      {
        alt: 'Chile',
        href: 'https://www.clarochile.cl/',
        name: 'Chile',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/chile.svg'
      },
      {
        alt: 'Colômbia',
        href: 'http://www.claro.com.co/',
        name: 'Colômbia',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/colombia.svg'
      },
      {
        alt: 'Costa Rica',
        href: 'https://www.claro.cr/',
        name: 'Costa Rica',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/costa-rica.svg'
      },
      {
        alt: 'Equador',
        href: 'http://www.claro.com.ec/',
        name: 'Equador',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/equador.svg'
      },
      {
        alt: 'El Salvador',
        href: 'https://www.claro.com.sv/',
        name: 'El Salvador',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/el-salvador.svg'
      },
      {
        alt: 'Espanha',
        href: 'https://www.claro.com.es/',
        name: 'Espanha',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/espanha.svg'
      },
      {
        alt: 'Estados Unidos',
        href: 'https://www.usclaro.com/',
        name: 'Estados Unidos',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/estados-unidos.svg'
      },
      {
        alt: 'Guatemala',
        href: 'https://www.claro.com.gt/',
        name: 'Guatemala',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/guatemala.svg'
      },
      {
        alt: 'Honduras',
        href: 'https://www.claro.com.hn/',
        name: 'Honduras',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/honduras.svg'
      },
      {
        alt: 'Nicarágua',
        href: 'https://www.claro.com.ni/',
        name: 'Nicarágua',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/nicaragua.svg'
      },
      {
        alt: 'Panamá',
        href: 'https://www.claro.com.pa/',
        name: 'Panamá',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/panama.svg'
      },
      {
        alt: 'Paraguai',
        href: 'https://www.claro.com.py/',
        name: 'Paraguai',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/paraguai.svg'
      },
      {
        alt: 'Peru',
        href: 'https://www.claro.com.pe/',
        name: 'Peru',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/peru.svg'
      },
      {
        alt: 'Porto Rico',
        href: 'https://www.claropr.com/',
        name: 'Porto Rico',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/porto-rico.svg'
      },
      {
        alt: 'Rep. Dominicana',
        href: 'https://www.claro.com.do/',
        name: 'Rep. Dominicana',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/republica-dominicana.svg'
      },
      {
        alt: 'Uruguai',
        href: 'https://www.claro.com.uy/',
        name: 'Uruguai',
        src: 'https://mondrian.claro.com.br/brands/flags-amx/sm/uruguai.svg'
      }
    ],
    icons: [
      {
        'aria-label': 'pcd',
        href: '#',
        icon: 'pcd',
        tag: 'a'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tag: 'button'
      },
      {
        'aria-label': 'contraste',
        icon: 'alto-contraste',
        onClick: () => {},
        tag: 'button'
      }
    ],
    logo: {
      alt: 'Logo Claro Empresas',
      src: 'https://mondrian.claro.com.br/brands/vertical/inverse/claro-empresas.svg'
    },
    menuList: [
      {
        content: <div className="mdn-Menu-subMenu-list mdn-Menu-offerForm"><div className="mdn-offerForm-infos"><p className="mdn-Heading">Consulte ofertas disponíveis para você:</p><button className="mdn-Button mdn-Button--primary" title="Consultar Cep Automaticamente via Geolocalização" type="button">Consultar com localização atual</button><div className="mdn-Alert mdn-Alert--danger mdn-Alert--light mdn-isInitialized"><div className="mdn-Tag mdn-Tag--feedback"><div className="mdn-Alert-content"><span aria-hidden="true" className="mdn-Icon-informacao mdn-Icon--sm mdn-Tag-icon"/><p>Não foi possível capturar a sua localização. Por favor, revise as regras de permissão de seu navegador.</p></div></div></div></div><hr className="mdn-Divider mdn-Divider--horizontal mdn-Divider--default mdn-is-initialized" /><form action="https://planos.claro.com.br" aria-label="Confirme os campos de Cep e Número à seguir para consultar os combos diposníveis em sua região." className="mdn-offerForm" method="GET"><div className="mdn-Menu-inputGroup"><React.ForwardRef cep parentClassName="mdn-Col-xs-8">CEP</React.ForwardRef><React.ForwardRef number parentClassName="mdn-Col-xs-4">Número</React.ForwardRef></div><button className="mdn-Button mdn-Button--secondary mdn-Button--md" type="submit">Consultar neste endereço</button></form><div className="mdn-Link mdn-Link--arrow" data-test-id="linkArrow"><a className="mdn-Link-anchor" href="https://buscacepinter.correios.com.br/app/endereco/index.php" title="Caso não saiba o seu CEP, clique no botão e faça uma consulta no site dos Correios."><span className="mdn-Link-anchor-label">Não sei meu CEP{' '}</span><em className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div></div>,
        title: 'Combos'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Móvel'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Internet'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'TV & Streaming'
      },
      {
        href: '#',
        title: 'Fone'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Serviços Digitais'
      }
    ],
    segments: [
      {
        href: '#',
        title: 'Para você'
      },
      {
        enterprises: [
          {
            isActive: true,
            title: 'Pequenas e médias empresas'
          },
          {
            href: '#',
            title: 'Grandes empresas e Governo'
          }
        ],
        title: 'Para empresa'
      }
    ]
  }}
  enterprise
  search
/>
```

### Logged Enterprise

```jsx
<Menu
  data={{
    buttonList: [
      {
        content: <><div className="mdn-Menu-subMenu"><div className="mdn-Container"><ul className="mdn-Menu-subMenu-list mdn-Menu-subMenu-notifications"><li className="mdn-Menu-subMenu-list-item"><div className="mdn-Menu-card-notifications"><ul className="mdn-Menu-notifications-list"><li><p className="mdn-Text">Componentes Mondrian aqui...</p></li></ul></div></li></ul></div></div></>,
        iconName: 'carrinho',
        iconText: true,
        primaryInverse: true,
        title: 'Meus pedidos'
      }
    ],
    icons: [
      {
        'aria-label': 'pcd',
        href: '#',
        icon: 'pcd',
        tag: 'a'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tag: 'button'
      },
      {
        'aria-label': 'contraste',
        icon: 'alto-contraste',
        onClick: () => {},
        tag: 'button'
      }
    ],
    location: {
      onClick: () => {},
      title: 'São Paulo / SP - Cep: 01234-000 - Alterar endereço'
    },
    menuList: [
      {
        content: <div className="mdn-Menu-subMenu-list mdn-Menu-offerForm"><div className="mdn-offerForm-infos"><p className="mdn-Heading">Consulte ofertas disponíveis para você:</p><button className="mdn-Button mdn-Button--primary" title="Consultar Cep Automaticamente via Geolocalização" type="button">Consultar com localização atual</button><div className="mdn-Alert mdn-Alert--danger mdn-Alert--light mdn-isInitialized"><div className="mdn-Tag mdn-Tag--feedback"><div className="mdn-Alert-content"><span aria-hidden="true" className="mdn-Icon-informacao mdn-Icon--sm mdn-Tag-icon"/><p>Não foi possível capturar a sua localização. Por favor, revise as regras de permissão de seu navegador.</p></div></div></div></div><hr className="mdn-Divider mdn-Divider--horizontal mdn-Divider--default mdn-is-initialized" /><form action="https://planos.claro.com.br" aria-label="Confirme os campos de Cep e Número à seguir para consultar os combos diposníveis em sua região." className="mdn-offerForm" method="GET"><div className="mdn-Menu-inputGroup"><React.ForwardRef cep parentClassName="mdn-Col-xs-8">CEP</React.ForwardRef><React.ForwardRef number parentClassName="mdn-Col-xs-4">Número</React.ForwardRef></div><button className="mdn-Button mdn-Button--secondary mdn-Button--md" type="submit">Consultar neste endereço</button></form><div className="mdn-Link mdn-Link--arrow" data-test-id="linkArrow"><a className="mdn-Link-anchor" href="https://buscacepinter.correios.com.br/app/endereco/index.php" title="Caso não saiba o seu CEP, clique no botão e faça uma consulta no site dos Correios."><span className="mdn-Link-anchor-label">Não sei meu CEP{' '}</span><em className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div></div>,
        title: 'Combos'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Móvel'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Internet'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'TV & Streaming'
      },
      {
        href: '#',
        title: 'Fone'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Serviços Digitais'
      }
    ]
  }}
  ecommerce
  public
  search
/>
```

### Ecommerce

```jsx
<Menu
  data={{
    contract: {
      dataContract: {
        address: 'Rua Fulano de Tal, 1.200, apto 10, Bairro, Cidade, Estado. Cep: 01234-567',
        detail: 'Claro Combo Multi - Internet Via Cabo / Tv Digital / Fone / Celular',
        icon: 'multi',
        title: 'Contrato: 012/012345678'
      },
      link: {
        href: '#',
        title: 'Gerenciar meus contratos'
      },
      title: 'Residencial'
    },
    icons: [
      {
        'aria-label': 'pcd',
        href: '#',
        icon: 'pcd',
        tag: 'a'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tag: 'button'
      },
      {
        'aria-label': 'contraste',
        icon: 'alto-contraste',
        onClick: () => {},
        tag: 'button'
      }
    ],
    logo: {
      alt: 'Logo Minha Claro Empresas',
      src: 'https://mondrian.claro.com.br/brands/vertical/inverse/minha-claro-empresas.svg'
    },
    logoutButton: {
      onClick: () => {},
      title: 'Sair'
    },
    menuList: [
      {
        content: <div className="mdn-Menu-subMenu-list mdn-Menu-offerForm"><div className="mdn-offerForm-infos"><p className="mdn-Heading">Consulte ofertas disponíveis para você:</p><button className="mdn-Button mdn-Button--primary" title="Consultar Cep Automaticamente via Geolocalização" type="button">Consultar com localização atual</button><div className="mdn-Alert mdn-Alert--danger mdn-Alert--light mdn-isInitialized"><div className="mdn-Tag mdn-Tag--feedback"><div className="mdn-Alert-content"><span aria-hidden="true" className="mdn-Icon-informacao mdn-Icon--sm mdn-Tag-icon"/><p>Não foi possível capturar a sua localização. Por favor, revise as regras de permissão de seu navegador.</p></div></div></div></div><hr className="mdn-Divider mdn-Divider--horizontal mdn-Divider--default mdn-is-initialized" /><form action="https://planos.claro.com.br" aria-label="Confirme os campos de Cep e Número à seguir para consultar os combos diposníveis em sua região." className="mdn-offerForm" method="GET"><div className="mdn-Menu-inputGroup"><React.ForwardRef cep parentClassName="mdn-Col-xs-8">CEP</React.ForwardRef><React.ForwardRef number parentClassName="mdn-Col-xs-4">Número</React.ForwardRef></div><button className="mdn-Button mdn-Button--secondary mdn-Button--md" type="submit">Consultar neste endereço</button></form><div className="mdn-Link mdn-Link--arrow" data-test-id="linkArrow"><a className="mdn-Link-anchor" href="https://buscacepinter.correios.com.br/app/endereco/index.php" title="Caso não saiba o seu CEP, clique no botão e faça uma consulta no site dos Correios."><span className="mdn-Link-anchor-label">Não sei meu CEP{' '}</span><em className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div></div>,
        title: 'Combos'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Móvel'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Internet'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'TV & Streaming'
      },
      {
        href: '#',
        title: 'Fone'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Serviços Digitais'
      }
    ],
    notifications: {
      list: [
        {
          content: <><div className="mdn-Menu-list-item-notifications-item-date"><p className="mdn-Subtitle mdn-Subtitle--md">20</p><p className="mdn-Subtitle mdn-Menu-list-item-notifications-item-date-month--xxs">NOV</p></div><div className="mdn-Menu-list-item-notifications-item-content"><p className="mdn-Heading mdn-Heading--xxs">Promessa de pagamento</p><p className="mdn-Text">Seus serviços estão reduzidos por conta de atraso no pagamento. Clique no botão abaixo e solicite a reativação</p><button className="mdn-Button mdn-Button--primary mdn-Button--sm">Reativar serviços</button></div></>
        },
        {
          content: <><div className="mdn-Menu-list-item-notifications-item-date"><p className="mdn-Subtitle mdn-Subtitle--md">20</p><p className="mdn-Subtitle mdn-Menu-list-item-notifications-item-date-month--xxs">NOV</p></div><div className="mdn-Menu-list-item-notifications-item-content"><p className="mdn-Heading mdn-Heading--xxs">Promessa de pagamento</p><p className="mdn-Text">Seus serviços estão reduzidos por conta de atraso no pagamento. Clique no botão abaixo e solicite a reativação</p><button className="mdn-Button mdn-Button--primary mdn-Button--sm">Reativar serviços</button></div></>
        },
        {
          content: <><div className="mdn-Menu-list-item-notifications-item-date"><p className="mdn-Subtitle mdn-Subtitle--md">20</p><p className="mdn-Subtitle mdn-Menu-list-item-notifications-item-date-month--xxs">NOV</p></div><div className="mdn-Menu-list-item-notifications-item-content"><p className="mdn-Heading mdn-Heading--xxs">Promessa de pagamento</p><p className="mdn-Text">Seus serviços estão reduzidos por conta de atraso no pagamento. Clique no botão abaixo e solicite a reativação</p><button className="mdn-Button mdn-Button--primary mdn-Button--sm">Reativar serviços</button></div></>
        },
        {
          content: <div className="mdn-Link mdn-Link--arrow"><a className="mdn-Link-anchor" href="#"><span className="mdn-Link-anchor-label">Minha claro Residencial 1</span><span className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div>
        },
        {
          content: <div className="mdn-Link mdn-Link--arrow"><a className="mdn-Link-anchor" href="#"><span className="mdn-Link-anchor-label">Minha claro Residencial 2</span><span className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div>
        }
      ],
      unreadNotification: true
    }
  }}
  enterprise
  logged
/>
```

### Logged

```jsx
<Menu
  data={{
    contract: {
      dataContract: {
        address: 'Rua Fulano de Tal, 1.200, apto 10, Bairro, Cidade, Estado. Cep: 01234-567',
        detail: 'Claro Combo Multi - Internet Via Cabo / Tv Digital / Fone / Celular',
        icon: 'multi',
        title: 'Contrato: 012/012345678'
      },
      link: {
        href: '#',
        title: 'Gerenciar meus contratos'
      },
      title: 'Residencial'
    },
    icons: [
      {
        'aria-label': 'pcd',
        href: '#',
        icon: 'pcd',
        tag: 'a'
      },
      {
        'aria-label': 'libras',
        icon: 'libras',
        onClick: () => {},
        tag: 'button'
      },
      {
        'aria-label': 'contraste',
        icon: 'alto-contraste',
        onClick: () => {},
        tag: 'button'
      }
    ],
    logo: {
      alt: 'Logo Claro Residencial',
      src: 'https://mondrian.claro.com.br/brands/horizontal/inverse/minha-claro.svg'
    },
    logoutButton: {
      onClick: () => {},
      title: 'Sair'
    },
    menuList: [
      {
        content: <div className="mdn-Menu-subMenu-list mdn-Menu-offerForm"><div className="mdn-offerForm-infos"><p className="mdn-Heading">Consulte ofertas disponíveis para você:</p><button className="mdn-Button mdn-Button--primary" title="Consultar Cep Automaticamente via Geolocalização" type="button">Consultar com localização atual</button><div className="mdn-Alert mdn-Alert--danger mdn-Alert--light mdn-isInitialized"><div className="mdn-Tag mdn-Tag--feedback"><div className="mdn-Alert-content"><span aria-hidden="true" className="mdn-Icon-informacao mdn-Icon--sm mdn-Tag-icon"/><p>Não foi possível capturar a sua localização. Por favor, revise as regras de permissão de seu navegador.</p></div></div></div></div><hr className="mdn-Divider mdn-Divider--horizontal mdn-Divider--default mdn-is-initialized" /><form action="https://planos.claro.com.br" aria-label="Confirme os campos de Cep e Número à seguir para consultar os combos diposníveis em sua região." className="mdn-offerForm" method="GET"><div className="mdn-Menu-inputGroup"><React.ForwardRef cep parentClassName="mdn-Col-xs-8">CEP</React.ForwardRef><React.ForwardRef number parentClassName="mdn-Col-xs-4">Número</React.ForwardRef></div><button className="mdn-Button mdn-Button--secondary mdn-Button--md" type="submit">Consultar neste endereço</button></form><div className="mdn-Link mdn-Link--arrow" data-test-id="linkArrow"><a className="mdn-Link-anchor" href="https://buscacepinter.correios.com.br/app/endereco/index.php" title="Caso não saiba o seu CEP, clique no botão e faça uma consulta no site dos Correios."><span className="mdn-Link-anchor-label">Não sei meu CEP{' '}</span><em className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div></div>,
        title: 'Combos'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Móvel'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Internet'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'TV & Streaming'
      },
      {
        href: '#',
        title: 'Fone'
      },
      {
        content: [
          {
            linkList: [
              {
                href: '#',
                title: 'Pós'
              },
              {
                href: '#',
                title: 'Controle'
              },
              {
                href: '#',
                title: 'Flex'
              },
              {
                href: '#',
                title: 'Pré'
              },
              {
                href: '#',
                title: 'Rural'
              },
              {
                href: '#',
                title: 'Pacotes adicionais'
              }
            ],
            title: 'testeteteste'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Uso no exterior'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Portabilidade'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Cobertura'
          },
          {
            linkList: [
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              },
              {
                href: '#',
                title: 'link'
              }
            ],
            title: 'Recarga'
          }
        ],
        title: 'Serviços Digitais'
      }
    ],
    notifications: {
      list: [
        {
          content: <><div className="mdn-Menu-list-item-notifications-item-date"><p className="mdn-Subtitle mdn-Subtitle--md">20</p><p className="mdn-Subtitle mdn-Menu-list-item-notifications-item-date-month--xxs">NOV</p></div><div className="mdn-Menu-list-item-notifications-item-content"><p className="mdn-Heading mdn-Heading--xxs">Promessa de pagamento</p><p className="mdn-Text">Seus serviços estão reduzidos por conta de atraso no pagamento. Clique no botão abaixo e solicite a reativação</p><button className="mdn-Button mdn-Button--primary mdn-Button--sm">Reativar serviços</button></div></>
        },
        {
          content: <><div className="mdn-Menu-list-item-notifications-item-date"><p className="mdn-Subtitle mdn-Subtitle--md">20</p><p className="mdn-Subtitle mdn-Menu-list-item-notifications-item-date-month--xxs">NOV</p></div><div className="mdn-Menu-list-item-notifications-item-content"><p className="mdn-Heading mdn-Heading--xxs">Promessa de pagamento</p><p className="mdn-Text">Seus serviços estão reduzidos por conta de atraso no pagamento. Clique no botão abaixo e solicite a reativação</p><button className="mdn-Button mdn-Button--primary mdn-Button--sm">Reativar serviços</button></div></>
        },
        {
          content: <><div className="mdn-Menu-list-item-notifications-item-date"><p className="mdn-Subtitle mdn-Subtitle--md">20</p><p className="mdn-Subtitle mdn-Menu-list-item-notifications-item-date-month--xxs">NOV</p></div><div className="mdn-Menu-list-item-notifications-item-content"><p className="mdn-Heading mdn-Heading--xxs">Promessa de pagamento</p><p className="mdn-Text">Seus serviços estão reduzidos por conta de atraso no pagamento. Clique no botão abaixo e solicite a reativação</p><button className="mdn-Button mdn-Button--primary mdn-Button--sm">Reativar serviços</button></div></>
        },
        {
          content: <div className="mdn-Link mdn-Link--arrow"><a className="mdn-Link-anchor" href="#"><span className="mdn-Link-anchor-label">Minha claro Residencial 1</span><span className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div>
        },
        {
          content: <div className="mdn-Link mdn-Link--arrow"><a className="mdn-Link-anchor" href="#"><span className="mdn-Link-anchor-label">Minha claro Residencial 2</span><span className="mdn-Link-anchor-icon mdn-Icon-direita mdn-Icon--sm" /></a></div>
        }
      ],
      unreadNotification: true
    }
  }}
  logged
/>
```

---

---

## Modal

### Sm

```jsx
<Modal
  data={{
    content: <Text body>Descrição do conteúdo</Text>,
    footer: {
      action: <><Button primary>Ok</Button><Button secondary>Fechar</Button></>,
      block: false
    },
    header: <Heading xs>Título modal</Heading>,
    iconContent: 'circulo-exclamacao',
    isOpen: true,
    onCloseClick: () => {}
  }}
  disableFocusTrap
  sm
/>
```

### Md

```jsx
<Modal
  data={{
    content: <Text body>Descrição do conteúdo</Text>,
    footer: {
      action: <><Button primary>Ok</Button><Button secondary>Fechar</Button></>,
      block: false
    },
    header: <Heading xs>Título modal</Heading>,
    iconContent: 'circulo-exclamacao',
    isOpen: true,
    onCloseClick: () => {}
  }}
  disableFocusTrap
  md
/>
```

### Lg

```jsx
<Modal
  data={{
    content: <Text body>Descrição do conteúdo</Text>,
    footer: {
      action: <><Button primary>Ok</Button><Button secondary>Fechar</Button></>,
      block: false
    },
    header: <Heading xs>Título modal</Heading>,
    iconContent: 'circulo-exclamacao',
    isOpen: true,
    onCloseClick: () => {}
  }}
  disableFocusTrap
  lg
/>
```

---

---

## Multimedia

### Image

```jsx
<Multimedia
  data={{
    content: <img alt="Imagem de exemplo" className="mdn-Modal--multimedia-media" src="https://mondrian.claro.com.br/assets/placeholders/image-sample.jpg"/>,
    isOpen: true,
    onCloseClick: () => {}
  }}
 />
```

### Video

```jsx
<Multimedia
  data={{
    content: <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen aria-label="Video description" className="mdn-Modal--multimedia-media" src="https://www.youtube.com/embed/qbFLB4cHjys" title="Multimedia video"/>,
    isOpen: true,
    onCloseClick: () => {}
  }}
 />
```

### Video

```jsx
<Multimedia
  data={{
    content: <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen aria-label="Video description" className="mdn-Modal--multimedia-media" src="https://www.youtube.com/embed/qbFLB4cHjys" title="Multimedia video"/>,
    isOpen: true,
    onCloseClick: () => {}
  }}
 />
```

---

---

## Pagination

### Desktop

```jsx
<Pagination
  currentPage={1}
  forcedViewport={769}
  pageSize={10}
  totalCount={100}
/>
```

### Mobile

```jsx
<Pagination
  currentPage={1}
  forcedViewport={767}
  pageSize={10}
  totalCount={100}
/>
```

### Mobile

```jsx
<Pagination
  currentPage={1}
  forcedViewport={767}
  pageSize={10}
  totalCount={100}
/>
```

---

---

## Price

### Default

```jsx
<Price
  data={{
    prefix: 'De R$ 0.000,00 por:',
    price: '000.000,00',
    suffix: 'no débito automático + fatura digital com fidelidade'
  }}
/>
```

### Default

```jsx
<Price
  data={{
    prefix: 'De R$ 0.000,00 por:',
    price: '000.000,00',
    suffix: 'no débito automático + fatura digital com fidelidade'
  }}
/>
```

---

---

## ProgressBar

### MD

```jsx
<ProgressBar
  isVisible
  value={42}
/>
```

### SM

```jsx
<ProgressBar
  isVisible
  progress={100}
  sm
  value={42}
/>
```

### SM

```jsx
<ProgressBar
  isVisible
  progress={100}
  sm
  value={42}
/>
```

---

---

## Radio

### Default

```jsx
<Radio
>
  Label
</Radio>
```

### Default Disabled

```jsx
<Radio
  disabled
>
  Label
</Radio>
```

### Default Disabled

```jsx
<Radio
  disabled
>
  Label
</Radio>
```

---

---

## Rating

### Default

```jsx
<Rating />
```

### Read Only

```jsx
<Rating
  rate={4.5}
  readOnly
>
  11 avaliaçãoes
</Rating>
```

### Read Only

```jsx
<Rating
  rate={4.5}
  readOnly
>
  11 avaliaçãoes
</Rating>
```

---

---

## ShortCut

### Primary

```jsx
<Shortcut
  href="#"
  icon="claro"
>
  Title
</Shortcut>
```

### Primary

```jsx
<Shortcut
  href="#"
  icon="claro"
>
  Title
</Shortcut>
```

---

---

## Shortcut

### Primary Description

```jsx
<Shortcut
  data={{
    content: 'Description of content here.',
    title: 'Title'
  }}
  href="#"
  icon="claro"
  isDetails
/>
```

### Secondary

```jsx
<Shortcut
  href="#"
  icon="claro"
  secondary
>
  Title
</Shortcut>
```

### Secondary Description

```jsx
<Shortcut
  data={{
    content: 'Description of content here.',
    title: 'Title'
  }}
  href="#"
  icon="claro"
  isDetails
  secondary
/>
```

### Secondary Description

```jsx
<Shortcut
  data={{
    content: 'Description of content here.',
    title: 'Title'
  }}
  href="#"
  icon="claro"
  isDetails
  secondary
/>
```

---

---

## SkipLink

### Default

```jsx
<SkipLink>
  <React.Fragment key=".0">
    <SkipLinkItem
      href="#mdn-MainContent"
      tabIndex={1}
      target="_self"
      title="Atalhos de acessibilidade: ir-para-conteudo"
    >
      Ir para o Corpo do site
    </SkipLinkItem>
    <SkipLinkItem
      href="#mdn-Header"
      tabIndex={2}
      target="_self"
      title="Atalhos de acessibilidade: ir-para-cabecalho"
    >
      Ir para o Cabeçalho do site
    </SkipLinkItem>
    <SkipLinkItem
      href="#mdn-Footer"
      tabIndex={3}
      target="_self"
      title="Atalhos de acessibilidade: ir-para-rodape"
    >
      Ir para o Rodapé do site
    </SkipLinkItem>
  </React.Fragment>
</SkipLink>
```

### Default

```jsx
<SkipLink>
  <React.Fragment key=".0">
    <SkipLinkItem
      href="#mdn-MainContent"
      tabIndex={1}
      target="_self"
      title="Atalhos de acessibilidade: ir-para-conteudo"
    >
      Ir para o Corpo do site
    </SkipLinkItem>
    <SkipLinkItem
      href="#mdn-Header"
      tabIndex={2}
      target="_self"
      title="Atalhos de acessibilidade: ir-para-cabecalho"
    >
      Ir para o Cabeçalho do site
    </SkipLinkItem>
    <SkipLinkItem
      href="#mdn-Footer"
      tabIndex={3}
      target="_self"
      title="Atalhos de acessibilidade: ir-para-rodape"
    >
      Ir para o Rodapé do site
    </SkipLinkItem>
  </React.Fragment>
</SkipLink>
```

---

---

## SpinBox

### Default

```jsx
<SpinBox
  defaultValue={10}
  max={13}
  min={5}
/>
```

### Default

```jsx
<SpinBox
  defaultValue={10}
  max={13}
  min={5}
/>
```

---

---

## Spinner

### Default

```jsx
<Spinner
  default
  isLoading
/>
```

### Inverse

```jsx
<Spinner
  default
  isLoading
/>
```

### Inverse

```jsx
<Spinner
  default
  isLoading
/>
```

---

---

## Stepper

### Default

```jsx
<Stepper
  data={[
    {
      icon: 'carrinho',
      status: 'done'
    },
    {
      icon: 'carrinho',
      status: 'done'
    },
    {
      icon: 'carrinho',
      status: 'active'
    },
    {
      icon: 'carrinho',
      status: 'inactive'
    },
    {
      icon: 'carrinho',
      status: 'inactive'
    }
  ]}
/>
```

### Default Icon

```jsx
<Stepper
  data={[
    {
      icon: 'carrinho',
      status: 'done'
    },
    {
      icon: 'carrinho',
      status: 'done'
    },
    {
      icon: 'carrinho',
      status: 'active'
    },
    {
      icon: 'carrinho',
      status: 'inactive'
    },
    {
      icon: 'carrinho',
      status: 'inactive'
    }
  ]}
  icon
/>
```

### Default Icon

```jsx
<Stepper
  data={[
    {
      icon: 'carrinho',
      status: 'done'
    },
    {
      icon: 'carrinho',
      status: 'done'
    },
    {
      icon: 'carrinho',
      status: 'active'
    },
    {
      icon: 'carrinho',
      status: 'inactive'
    },
    {
      icon: 'carrinho',
      status: 'inactive'
    }
  ]}
  icon
/>
```

---

---

## Swiper

### Default

```jsx
<Swiper
  isMondrianVanilla
>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
</Swiper>
```

### Inverse

```jsx
<Swiper
  inverse
  isMondrianVanilla
>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
</Swiper>
```

### Bullets

```jsx
<Swiper
  bullets
  isMondrianVanilla
>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
  <div>
    <h1 className="mdn-Heading mdn-Heading--md">
      Ex. Item Swiper
    </h1>
    <img
      alt=""
      src="https://mondrian.claro.com.br/assets/placeholders/266x354.png"
    />
  </div>
</Swiper>
```

### CardGroup

```jsx
<Swiper
  isCardGroup
  isMondrianVanilla
>
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      },
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
</Swiper>
```

### CardGroup

```jsx
<Swiper
  isCardGroup
  isMondrianVanilla
>
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      },
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX',
          suffix: 'em 10x no cartão'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          brandGroup: [
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/globoplay.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/now.svg'
            },
            {
              alt: 'facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/youtube.svg'
            },
            {
              alt: 'X',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/twitter.svg'
            },
            {
              alt: 'Facebook',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/facebook.svg'
            },
            {
              alt: 'Netflix',
              isVisible: true,
              src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/netflix.svg'
            }
          ]
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
  <Card
    actions={[
      {
        button: {
          className: 'mdn-Button--block',
          href: '#',
          label: 'Button global'
        },
        condition: 'Price condition',
        link: {
          arrow: false,
          className: 'adfadfadfasdfa',
          href: 'https://www.intagram.com',
          label: 'Link inline',
          tag: 'a',
          target: '_self'
        },
        price: {
          prefix: 'De R$ 1XXX,XX por:',
          price: '3XX,XX'
        },
        radio: {
          children: 'Claro TV+ extra',
          className: 'mdn-Radio-input',
          id: 'primary',
          name: 'some-name',
          value: 'fone'
        }
      }
    ]}
    description={{
      children: 'Description below'
    }}
    detail={[
      {
        group: {
          value: 'Description'
        },
        label: 'Text Label'
      },
      {
        group: {
          icon: 'tv'
        },
        label: 'Text Label'
      }
    ]}
    heading={{
      children: 'Title above'
    }}
  />
</Swiper>
```

---

---

## TabSelect

### Default

```jsx
<TabSelect
  data={[
    {
      content: <Text body>Tab 1 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 1'
    },
    {
      content: <Text body>Tab 2 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 2'
    },
    {
      content: <Text body>Tab 3 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 3'
    },
    {
      content: <Text body>Tab 4 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 4'
    },
    {
      content: <Text body>Tab 5 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 5'
    }
  ]}
  isMondrianVanilla
/>
```

### Fluid

```jsx
<TabSelect
  data={[
    {
      content: <Text body>Tab 1 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 1'
    },
    {
      content: <Text body>Tab 2 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 2'
    },
    {
      content: <Text body>Tab 3 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 3'
    },
    {
      content: <Text body>Tab 4 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 4'
    },
    {
      content: <Text body>Tab 5 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 5'
    }
  ]}
  fluid
  isMondrianVanilla
/>
```

### Fluid

```jsx
<TabSelect
  data={[
    {
      content: <Text body>Tab 1 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 1'
    },
    {
      content: <Text body>Tab 2 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 2'
    },
    {
      content: <Text body>Tab 3 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 3'
    },
    {
      content: <Text body>Tab 4 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 4'
    },
    {
      content: <Text body>Tab 5 - A Claro possui uma das melhores coberturas do país e está presente em mais de 1.700 municípios.</Text>,
      title: 'Título Tab 5'
    }
  ]}
  fluid
  isMondrianVanilla
/>
```

---

---

## Tag

### Primary

```jsx
<Tag
  color="primary"
  icon=""
>
  Tag primary
</Tag>
```

### Primary With Icon

```jsx
<Tag
  color="primary"
  icon="descontos"
>
  Tag primary
</Tag>
```

### Secondary

```jsx
<Tag color="secondary">
  Tag secondary
</Tag>
```

### Yellow

```jsx
<Tag color="yellow">
  Tag yellow
</Tag>
```

### Neutral

```jsx
<Tag color="neutral">
  Tag neutral
</Tag>
```

---

---

## Text

### Heading Xl

```jsx
<Heading
  xl
>
  Heading Xl
</Heading>
```

### Heading Lg

```jsx
<Heading
  lg
>
  Heading Lg
</Heading>
```

### Heading Md

```jsx
<Heading
  md
>
  Heading Md
</Heading>
```

### Heading Sm

```jsx
<Heading
  sm
>
  Heading Sm
</Heading>
```

### Heading Xs

```jsx
<Heading
  xs
>
  Heading Xs
</Heading>
```

### Heading Xl Inverse

```jsx
<Heading
  inverse
  xl
>
  Heading Xl
</Heading>
```

### Icon Sm

```jsx
<Text
  icon="alerta"
  iconPosition="before"
  sm
>
  Icon before text Sm
</Text>
```

### Icon Inverse Sm

```jsx
<Text
  icon="alerta"
  iconPosition="before"
  inverse
  sm
>
  Icon before text Sm
</Text>
```

---

---

## Toggle

### Default

```jsx
<Toggle
/>
```

### Default Disabled

```jsx
<Toggle disabled />
```

### Default Disabled

```jsx
<Toggle disabled />
```

---

---

## Tooltip

### Left

```jsx
<Tooltip
  href=""
  iconName=""
  isVisible
  left
  linkTitle=""
>
  Text tooltip
</Tooltip>
```

### Left Top

```jsx
<Tooltip
  isVisible
  leftTop
>
  Text tooltip
</Tooltip>
```

### Left Top Inverse

```jsx
<Tooltip
  inverse
  isVisible
  leftTop
>
  Text tooltip
</Tooltip>
```

### Left Bottom

```jsx
<Tooltip
  isVisible
  leftBottom
>
  Text tooltip
</Tooltip>
```

### Right

```jsx
<Tooltip
  isVisible
  right
>
  Text tooltip
</Tooltip>
```

---

---

## Tooltipo

### Left Inverse

```jsx
<Tooltip
  inverse
  isVisible
  left
>
  Text tooltip
</Tooltip>
```

### Left Inverse

```jsx
<Tooltip
  inverse
  isVisible
  left
>
  Text tooltip
</Tooltip>
```

---

---

## Topic

### Brand Normal

```jsx
<Topic
  brand={{
    alt: 'claro-musica',
    src: 'https://mondrian.claro.com.br/brands/app/benefits/32px-alternative/claro-musica.svg'
  }}
  sm
>
  This is a topic brand
</Topic>
```

### Brand Normal Inverse

```jsx
<Topic
  brand={{
    alt: 'claro-musica',
    src: 'https://mondrian.claro.com.br/brands/app/benefits/32px-alternative/claro-musica.svg'
  }}
  inverse
  sm
>
  This is a topic brand
</Topic>
```

### Icon Normal Lg

```jsx
<Topic
  horizontal
  icon="claro"
  lg
>
  This is a topic lg
</Topic>
```

### Icon Normal Lg Inverse

```jsx
<Topic
  horizontal
  icon="claro"
  inverse
  lg
>
  This is a topic lg
</Topic>
```

### Vertical Brand

```jsx
<Topic
  brand={{
    alt: 'claro-musica',
    src: 'https://mondrian.claro.com.br/brands/app/72px-default/claro-musica.svg'
  }}
  vertical
>
  This is a vertical topic with an brand in shape
</Topic>
```

---

---

## TopicDetails

### Brand Details

```jsx
<TopicDetails
  brand
  data={[
    {
      body: 'Text body lorem ipsum dolor sit amet.',
      brand: {
        alt: 'facebook',
        src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg'
      },
      description: 'Topic brand'
    }
  ]}
/>
```

### Brand Details Inverse

```jsx
<TopicDetails
  brand
  data={[
    {
      body: 'Text body lorem ipsum dolor sit amet.',
      brand: {
        alt: 'facebook',
        src: 'https://mondrian.claro.com.br/brands/app/32px-alternative/mcafee.svg'
      },
      description: 'Topic brand'
    }
  ]}
  inverse
/>
```

### Icon Details Lg

```jsx
<TopicDetails
  data={[
    {
      body: 'Text body lorem ipsum dolor sit amet.',
      description: 'This is a topic Lg',
      icon: {
        ariaLabel: 'Logo claro',
        name: 'claro',
        size: 'lg'
      }
    }
  ]}
/>
```

### Icon Details Lg Inverse

```jsx
<TopicDetails
  data={[
    {
      body: 'Text body lorem ipsum dolor sit amet.',
      description: 'This is a topic Lg',
      icon: {
        ariaLabel: 'Logo claro',
        name: 'claro',
        size: 'lg'
      }
    }
  ]}
  inverse
/>
```

---

---
