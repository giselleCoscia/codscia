import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  Portal,
  type DialogRootProps
} from '@chakra-ui/react'

interface TrailerModalProps extends DialogRootProps {
  trailerUrl?: string
}

export const TrailerModal = ({ trailerUrl, ...rest }: TrailerModalProps) => {
  return (
    <DialogRoot {...rest} size="cover" placement="center" motionPreset="slide-in-bottom">
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent maxW="4xl">
            <DialogBody p={0}>
              {trailerUrl && (
                <iframe
                  width="100%"
                  height="400px"
                  src={trailerUrl}
                  title="YouTube Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none', borderRadius: '8px' }}
                />
              )}
            </DialogBody>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  )
}