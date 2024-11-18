// https://nextjs.org/docs/basic-features/image-optimization
import profilePic from '@public/blogs/warner-brothers-studio-tour.jpg';
import { Colors } from '@styles/colors';
import { media } from '@styles/media';
import Image from 'next/image';
import styled from 'styled-components';

export const LatestBlogs = ({ count = 3 }: LatestBlogsProps) => {
  return (
    <Wrapper>
      <ArticleSummary>
        <div className="image-wrapper">
          <Image
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
        <div className="description">
          <h3 className="title">
            Good boy invents iPup, smartphone for canines
          </h3>
          <p>
            While Spot was learning to play fetch and Rover was rescuing people
            stuck in wells, Daniel “Bark” Zhang was building the world first
            smartphone for dogs. The iPup is a paw-friendly mobile tablet
            running Android “Beefcake”. Daniel says (through a dog translator)
            that the idea struck him while peeing on a tree.
          </p>
        </div>
      </ArticleSummary>

      <ArticleSummary>
        <div className="image-wrapper">
          <Image
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
        <div className="description">
          <h3 className="title">A secret balloon store in downtown Toronto</h3>
          <p>
            It is a quiet, unassuming building, with venetian blinds and spanish
            masonry. Only the sharpest observer would notice the occasional
            flash of colour from beyond the curtain, a glint of red and yellow
            inflatables. Alabaster Balloonery is possibly the country most
            understated party store, but outside appearances can be deceiving.
            Though its red-brick facade has been left unchanged since it was
            erected over 50 years ago, the interior has been renovated, bringing
            a postmodern flourish that complements the colourful party supplies
            quite nicely.
          </p>
        </div>
      </ArticleSummary>

      <ArticleSummary>
        <div className="image-wrapper">
          <Image
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
        <div className="description">
          <h3 className="title">
            The $20 standing desk physiotherapists are obsessed with
          </h3>
          <p>
            If sitting is the new smoking, then standing desks are the new
            nicotine patches. But most standing desks cost an arm and a leg.
            This Vancouver startup is revolutionizing the office wellness
            category.
          </p>
        </div>
      </ArticleSummary>
    </Wrapper>
  );
};

const ArticleSummary = styled.article`
  flex: 1;
  padding: 12px;
  background: white;
  border: 3px solid ${Colors.Primary};
  box-shadow: 6px 6px 0px ${Colors.TransparentGray15};

  .title {
    font-size: 1.25rem;
    margin: 0.5em 0;

    hyphens: auto;
    overflow-wrap: break-word;
  }

  p {
    margin: 0;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;

  ${media.from_tablet`
    & {
      flex-direction: row;
    }
  `}
`;

type LatestBlogsProps = {
  count?: number;
};
