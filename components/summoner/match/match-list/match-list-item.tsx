import { ImageObj, ItemInfo } from '@/models';
import { useSummonerContext } from '@/pages/summoners/[name]';
import noneItemBlueImage from '@/public/images/icon-none-item-blue.png';
import noneItemRedImage from '@/public/images/icon-none-item-red.png';
import { getItemId } from '@/utils/convert';
import { FC, useMemo, useState } from 'react';
import matchListItemStyle from './match-list-item.style';

interface MatchListItemProps {
  items: ImageObj[];
}

const MatchListItem: FC<MatchListItemProps> = ({ items }) => {
  const { itemsDTO } = useSummonerContext();

  const itemInfos = useMemo(
    () =>
      items.map(item => {
        const id = getItemId(item) as string;
        return { ...itemsDTO?.data[id], imageUrl: item.imageUrl };
      }),
    [items]
  );

  const normalItems = itemInfos.filter(
    item => (item.colloq?.indexOf('장신구') || -1) < 0
  );

  const visionItems = itemInfos.filter(
    item => (item.colloq?.indexOf('장신구') || -1) > -1
  );

  return (
    <div className="items" css={matchListItemStyle}>
      <div className="normal">
        {Array.from({ length: 6 }).map((_, index) => {
          const item = normalItems[index];
          return item ? (
            <ItemImage key={`item-${index}`} item={item} />
          ) : (
            <div key={`item-${index}`} className="item none" />
          );
        })}
      </div>
      <div className="vision">
        {Array.from({ length: 2 }).map((_, index) => {
          const item = visionItems[index];
          return item ? (
            <ItemImage key={`item-${index}`} item={item} />
          ) : (
            <div key={`item-${index}`} className="item">
              <img className="red" src={noneItemRedImage.src} />
              <img className="blue" src={noneItemBlueImage.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface ItemImageProps {
  item: Partial<ItemInfo> & {
    imageUrl: string;
  };
}

const ItemImage: FC<ItemImageProps> = ({ item }) => {
  const [tooltip, setTooltip] = useState(false);
  function handleHover(hover: boolean) {
    setTooltip(hover);
  }
  return (
    <div className="item">
      <img
        src={item.imageUrl}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
      {tooltip && <p className="tooltip">{item.plaintext}</p>}
    </div>
  );
};

export default MatchListItem;
