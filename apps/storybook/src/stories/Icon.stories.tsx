import { Icon, IconType } from '@lumartinez/ui'
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Example/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        type: {
            type: 'symbol',
            control: 'select',
            options: Object.values(IconType)
        }
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconExample: Story = {
    args: {
        type: IconType.ARROWS_UP_FROM_LINE
    },
};

