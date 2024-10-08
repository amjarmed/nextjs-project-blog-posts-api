import {
  faBars,
  faCalendar,
  faComment,
  faTag,
  faUser,
  faXmarkSquare,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import React from 'react';

type IconKey = 'calendar' | 'tag' | 'user' | 'xmark' | 'bars' | 'comment';

const iconMap: Record<IconKey, IconDefinition> = {
  calendar: faCalendar,
  tag: faTag,
  user: faUser,
  xmark: faXmarkSquare,
  bars: faBars,
  comment: faComment
};

interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconKey;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const selectedIcon = iconMap[icon];
  return <FontAwesomeIcon icon={selectedIcon} {...props} />;
};

export default Icon;
