import {PushApplication} from '../../src/applications';
import {AndroidVariant, IOSTokenVariant, IOSVariant, WebPushVariant} from '../../src/variants';

export const mockData: PushApplication[] = [
  {
    id: '1',
    pushApplicationID: '1:1',
    name: 'Application 1',
    description: 'Application 1',
    developer: 'Test Developer 1',
    masterSecret: 'Shhhhhhh!',
    variants: [
      {
        id: 'v-1-1',
        variantID: 'v-1:1',
        name: 'Variant 1',
        developer: 'developer 1',
        secret: 'Shhhhhhhh!',
        type: 'android',
        googleKey: '12345678',
        projectNumber: '1',
      } as AndroidVariant,
      {
        id: 'v-1-2',
        variantID: 'v-1:2',
        name: 'Variant 2',
        developer: 'developer 1',
        secret: 'Shhhhhhhh!',
        type: 'ios',
        production: true,
      } as IOSVariant,
      {
        id: 'v-1-3',
        variantID: 'v-1:3',
        name: 'Variant 3',
        developer: 'developer 2',
        secret: 'Shhhhhhhh!',
        type: 'ios_token',
        bundleId: '123bundle',
        keyId: '123key',
        teamId: '123team',
      } as IOSTokenVariant,
    ],
  },
  {
    id: '2',
    pushApplicationID: '2:2',
    name: 'Application 2',
    description: 'Application 2',
    developer: 'Test Developer 1',
    masterSecret: 'Shhhhhhh!',
    variants: [
      {
        id: 'v2-1',
        variantID: 'v-2:1',
        name: 'Variant 1',
        developer: 'developer 1',
        secret: 'Shhhhhhhh!',
        type: 'android',
        googleKey: '12345678',
        projectNumber: '1',
      } as AndroidVariant,
      {
        id: 'v2-2',
        variantID: 'v-2:2',
        name: 'Variant 2',
        developer: 'developer 1',
        secret: 'Shhhhhhhh!',
        type: 'web_push',
      } as WebPushVariant,
    ],
  },
  {
    id: '3',
    pushApplicationID: '3:3',
    name: 'Application 3',
    description: 'Application 3',
    developer: 'Test Developer 2',
    masterSecret: 'Shhhhhhh!',
    variants: [
      {
        id: 'v3-1',
        variantID: 'v-3:1',
        name: 'Variant 1',
        developer: 'developer 1',
        secret: 'Shhhhhhhh!',
        type: 'android',
        googleKey: '12345678',
        projectNumber: '1',
      } as AndroidVariant,
    ],
  },
  {
    id: '4',
    pushApplicationID: '4:4',
    name: 'Application 4',
    description: 'Application 4',
    developer: 'Test Developer 2',
    masterSecret: 'Shhhhhhh!',
  },
];

export const findApplicationByID = (id: string) => {
  return mockData.find(app => app.pushApplicationID === id);
};
