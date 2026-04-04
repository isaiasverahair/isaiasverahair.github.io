# Isaías & Vera - Cabeleireiros Premium | Website

Website profissional para **Isaías & Vera Cabeleireiros**, um salão de beleza com 42 anos de excelência em tratamentos capilares, localizado em Nova Friburgo, Rio de Janeiro.

## Sobre o Projeto

Este é um projeto de desenvolvimento web focado em criar uma presença online moderna e eficiente para um negócio local de beleza. O site funciona como vitrine digital, permitindo que clientes conheçam os serviços, visualizem trabalhos realizados e agendem atendimentos diretamente pelo WhatsApp.

**Objetivo Principal:** Aumentar visibilidade do negócio, facilitar agendamentos e criar uma experiência de usuário premium que reflita a qualidade dos serviços prestados.

---

## Arquitetura & Tecnologias

### Stack Técnico
- **HTML5** - Marcação semântica com estrutura responsiva
- **CSS3** - Sistema de design com variáveis CSS reutilizáveis
- **Vanilla JavaScript** - Interatividade sem dependências externas
- **Font Awesome 6.4** - Ícones vetoriais
- **Google Fonts** - Tipografia (Playfair Display + Montserrat)

### Design System
A paleta de cores segue uma estratégia premium com:
- **Cores Primárias:** Nude (#D4A574), Rose-Gold (#B8860B)
- **Cores Neutras:** Dark (#2C2C2C), White (#FFFFFF)
- **Efeitos:** Shadows suaves, transições cúbicas e animações fluidas

---

## Estrutura do Código

```
├── index.html          # Página única com todas as seções
├── main.js             # Lógica de interatividade
├── styles.css          # Estilos globais com variáveis CSS
├── fonts/              # Fontes customizadas (Nathalia)
└── img/                # Assets (logos, imagens de serviços)
```

### Arquivos Principais

**index.html** - Single Page Application
- Navegação com menu responsivo
- Hero section com CTA
- Grid de serviços
- Seção de avaliações
- Mapa de localização
- Footer com links de contato

**main.js** - Funcionalidades
- Menu hamburger toggle com detecção de clique externo
- Scroll suave para âncoras (#sections)
- Indicador dinâmico de seção

**styles.css** - Camadas de Design
- Variáveis CSS definidas em `:root`
- Reset próprio + estilos globais
- Componentes (header, buttons, cards)
- Media queries para responsividade
- Animações CSS

---

## Estratégias Implementadas

### 1. Performance & Acessibilidade
- ✅ Meta viewport para mobile-first
- ✅ Preconnect a Google Fonts
- ✅ Atributos semânticos (aria-label, alt)
- ✅ Links com `rel="noopener noreferrer"`

### 2. UX/UI
- Design responsivo (mobile, tablet, desktop)
- Paleta tonal para sofisticação
- Animações suaves e transições cúbicas
- Hierarquia visual clara com tipografia

### 3. Integração
- **WhatsApp API** - Link direto com mensagem pré-preenchida
- **Google Fonts** - Tipografia melhorada
- **Font Awesome** - Ícones consistentes

### 4. Otimização
- ✅ Variáveis CSS para manutenção facilitada
- ✅ Scroll behavior suave nativo
- ✅ Menu que fecha ao clicar em link ou fora
- ✅ Single CSS file (sem build tool)

---

## Estrutura das Seções

| Seção | Propósito |
|-------|----------|
| **Início (Hero)** | Banner de impacto com CTA principal |
| **Serviços** | Grid com 6+ serviços oferecidos |
| **Avaliações** | Depoimentos e testimonials |
| **Localização** | Mapa interativo + endereço |
| **Sobre** | Histórico de 42 anos + equipe |

---

## Como Desenvolver Localmente

Para visualizar em seu navegador:

```bash
# Windows - CMD
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou abra diretamente em um servidor local (vs-code Live Server, Python, etc.) para evitar limite de CORS em recursos externos.

---

## Contribuidor

**Nicolas Nogueira** ([nchnogueira](https://github.com/nchnogueira))
- Desenvolvimento full-stack do website
- Design e UI/UX
- Integração WhatsApp
- Otimização e responsividade

---

## 💬 Contato

**Isaías & Vera Cabeleireiros**  
📍 Nova Friburgo - RJ  
📱 WhatsApp: [Clique aqui](https://wa.me/5522998259754?text=Olá!%20Acessando%20pelo%20site.%20Gostaria%20de%20informações%20sobre%20o%20agendamento.)

---

## 🎨 Design e Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Nude | `#D4A574` | Cor principal |
| Rose Gold | `#B8860B` | Acentos |
| Nude Light | `#E8D5C4` | Fundos claros |
| Dark | `#2C2C2C` | Textos principais |
| White | `#FFFFFF` | Fundos |

---

## 📱 Responsividade

O site foi otimizado para:
- 📱 **Mobile** (a partir de 320px)
- 📱 **Tablet** (a partir de 768px)
- 🖥️ **Desktop** (a partir de 1024px)

---

## 🔧 Personalizações

Para modificar o site, você pode:

1. **Alterar cores** - Edite as variáveis CSS em `styles.css`
2. **Atualizar serviços** - Modifique a seção de serviços em `index.html`
3. **Adicionar galeria** - Insira novas imagens na pasta `/img`
4. **Atualizar WhatsApp** - Altere o número no atributo `href` dos links de WhatsApp

---

## 📄 Licença

Este projeto é de propriedade de **Isaías & Vera Cabeleireiros**. 

Para fins de desenvolvimento, clone e personalize conforme necessário. Para outras utilizações, entre em contato.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Para reportar bugs ou sugerir melhorias:

1. Abra uma **Issue** descrevendo o problema
2. Verifique se já não existe uma issue similar
3. Seja descritivo e forneça exemplos se possível

---

## 📝 Notas Importantes

- ⚠️ O número de WhatsApp pode ser alterado conforme necessário
- 📸 Atualize as imagens conforme novos trabalhos são realizados
- 🔄 Mantenha a paleta de cores consistente para manter a identidade visual
- 📱 Sempre teste em dispositivos reais antes de fazer deploy

---

**Desenvolvido com ❤️ para Isaías & Vera Cabeleireiros**

