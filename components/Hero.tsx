import { styled } from 'goober';

export const HeroContainer = styled('div')`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding-bottom: calc(var(--page-side-padding) * 2);
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const HeroImageContainer = styled('div')<{ ar: string }>`
  width: 50%;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  position: relative;
  background: var(--light-grey);
  aspect-ratio: ${(props) => props.ar};
  img {
    opacity: 0.1;
    transition: opacity 500ms ease-out;
  }
  &.loaded {
    img {
      opacity: 1;
    }
  }

  &:first-child {
    @media (min-width: 901px) {
      margin-right: 20px;
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
  &:not(:first-child) {
    @media (min-width: 901px) {
      margin-left: 20px;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
  }

  @media (max-width: 900px) {
    width: calc(100% - (var(--page-side-padding) * 2));
    margin: 20px var(--page-side-padding);
    border-radius: var(--border-radius);
    order: -1;
  }

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const HeroTextContainer = styled('div')`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:first-child {
    align-items: flex-end;
    @media (min-width: 901px) {
      padding-right: 40px;
      padding-left: 80px;
    }
    @media (max-width: 900px) {
      align-items: flex-start;
    }
  }
  &:not(:first-child) {
    @media (min-width: 901px) {
      padding-right: 80px;
      padding-left: 40px;
    }
  }

  @media (max-width: 1000px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media (max-width: 900px) {
    width: calc(100% - (var(--page-side-padding) * 2));
    margin: 0px var(--page-side-padding);
    padding: 0px;
  }
`;
