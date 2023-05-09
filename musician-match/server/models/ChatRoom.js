const { Schema, model } = require('mongoose');

const chatRoomSchema = new Schema(
    {
        initiatorId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            require: true,
        },
        receiverId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            require: true,
        },
        lastMessage: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 500,
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
        timestamps: true,
      }
);

const ChatRoom = new model('ChatRoom', chatRoomSchema);

module.export = ChatRoom;