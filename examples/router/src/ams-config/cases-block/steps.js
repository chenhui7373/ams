import ams from '@ams-team/ams';

ams.block('steps', {
    type: 'steps',
    options: {
        'step1': `steps1`,
        'step2': 'steps2',
        'step3': 'steps3'
    },
    data: {
        active: 0
    },
    blocks: {
        'step1': {
            type: 'form',
            resource: 'resource',
            ctx: 'edit',
            operations: {
                submit: {
                    type: 'button',
                    label: '更新',
                    event: 'submit',
                    props: {
                        type: 'primary'
                    }
                }
            },
            events: {
                init: '@read',
                submit: '@update'
            }
        },
        step2: {
            type: 'list',
            resource: 'resource',
            events: {
                init: '@list'
            }
        },
        step3: {
            type: 'component',
            options: {
                is: 'div',
                text: 'some text here'
            }
        }
    },
    actions: {
        next() {
            this.data.active = (this.data.active + 1) % 3;
            console.log(this.data.active);
        }
    },
    operations: {
        next: {
            type: 'button',
            label: '下一步'
        }
    }
});
