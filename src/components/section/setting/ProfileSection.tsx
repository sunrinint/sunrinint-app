import useUser from '@hooks/useUser';
import { useTheme } from 'styled-components/native';
import useOverlay from '@hooks/useOverlay';
import { GrayButton, ImageContainer, ModalOverlay, RedButton } from './styles';
import { View } from 'react-native';
import { Column, Row, Spacer } from '@components/atomic';
import Typography from '@components/typography';
import { light } from '@/theme';
import React from 'react';
import Button from '@components/common/Button';
import Logout from '@assets/icons/logout.svg';
import Edit from '@assets/icons/edit.svg';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import useUpdateUser from '@hooks/useUpdateUser';
import ImagePicker from 'react-native-image-crop-picker';
import { uploadImage } from '@lib/api/upload';

const ProfileSection = () => {
  const { user } = useUser();
  const { colors } = useTheme();
  const overlay = useOverlay();
  const navigatoin = useNavigation<any>();
  const { updateUser } = useUpdateUser();
  const openModal = () => {
    overlay.open(
      <ModalOverlay>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              width: '100%',
              backgroundColor: colors.gray10,
              borderRadius: 8,
              padding: 16,
              gap: 20,
            }}
          >
            <Column $gap={12} $padding={[4, 4]} $alignItems={'flex-start'}>
              <Typography.Title $color={colors.gray80}>
                로그아웃 하시겠어요?
              </Typography.Title>
              <Typography.Body $color={colors.gray60}>
                로그아웃 하시면 다시 로그인 할 때 까지 SunrinINT를 사용하지
                못하게 됩니다.
              </Typography.Body>
            </Column>
            <Row $gap={8}>
              <GrayButton onPress={() => overlay.close()}>
                <Typography.SemiLabel $color={colors.gray80}>
                  취소
                </Typography.SemiLabel>
              </GrayButton>
              <RedButton
                onPress={async () => {
                  await GoogleSignin.signOut();
                  await AsyncStorage.removeItem('access');
                  await AsyncStorage.removeItem('refresh');
                  overlay.close();
                  navigatoin.navigate('Login');
                }}
              >
                <Typography.SemiLabel $color={light.gray10}>
                  로그아웃
                </Typography.SemiLabel>
              </RedButton>
            </Row>
          </View>
        </View>
      </ModalOverlay>,
    );
  };

  return (
    <Column $padding={[12, 0]} $alignItems={'center'}>
      <ImageContainer source={{ uri: user.profileImage }} />
      <Spacer $height={24} />
      <Typography.LargeTitle $color={colors.gray80}>
        {user.username}
      </Typography.LargeTitle>
      <Spacer $height={4} />
      <Typography.Body $color={colors.gray60}>{user.email}</Typography.Body>
      <Spacer $height={16} />
      <Row $justifyContent={'center'} $gap={8}>
        <Button
          fullWidth
          height={44}
          radius={999}
          level={10}
          onPress={openModal}
        >
          <Typography.Body $color={colors.gray70}>로그아웃</Typography.Body>
          <Logout fill={colors.gray80} />
        </Button>
        <Button
          fullWidth
          height={44}
          radius={999}
          level={10}
          onPress={() => {
            ImagePicker.openPicker({
              mediaType: 'photo',
              cropping: true,
              smartAlbums: ['UserLibrary'],
              width: 128,
              height: 160,
            })
              .then((image) => {
                uploadImage(image).then((res) =>
                  updateUser({ profileImage: res.url }),
                );
              })
              .catch((err) => console.log(err));
          }}
        >
          <Typography.Body $color={colors.gray70}>사진 수정</Typography.Body>
          <Edit fill={colors.gray80} />
        </Button>
      </Row>
    </Column>
  );
};

const Skeleton = () => {
  const { colors } = useTheme();
  return (
    <Column $padding={[12, 0]} $alignItems={'center'}>
      <ImageContainer />
      <Spacer $height={24} />
      <Typography.LargeTitle $color={colors.gray80}>...</Typography.LargeTitle>
      <Spacer $height={4} />
      {/*<Typography.Body $color={colors.gray60}>{user.email}</Typography.Body>*/}
      <Spacer $height={16} />
      <Row $justifyContent={'center'} $gap={8}>
        <Button
          fullWidth
          height={44}
          radius={999}
          level={10}
          // onPress={openModal}
        >
          <Typography.Body $color={colors.gray70}>로그아웃</Typography.Body>
          <Logout fill={colors.gray80} />
        </Button>
        <Button fullWidth height={44} radius={999} level={10}>
          <Typography.Body $color={colors.gray70}>사진 수정</Typography.Body>
          <Edit fill={colors.gray80} />
        </Button>
      </Row>
    </Column>
  );
};

ProfileSection.Skeleton = Skeleton;

export default ProfileSection;
