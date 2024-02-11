import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../typography';
import Card from '../atomic/Card';

export default function () {
  const { colors } = useTheme();
  return (
    <Card>
      <TimestampColumn>
        <TimestampRow>
          <Typography.Caption $color={colors.gray80}>3교시</Typography.Caption>
          <Typography.Caption $color={colors.gray40}>
            10:40 ~ 11:30
          </Typography.Caption>
        </TimestampRow>
        <Typography.Title $color={colors.gray90}>
          지금은{' '}
          <Typography.Title $color={colors.highlight}>
            시각 디자인
          </Typography.Title>{' '}
          시간
        </Typography.Title>
      </TimestampColumn>
      <ScheduleColumn>
        <ScheduleRow>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                1교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>영어A</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                2교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>영어A</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                3교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.highlight}>시디</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                4교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>영어A</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                5교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>영어A</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                점심
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>점심시간</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                6교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>영어A</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
          <ScheduleItem>
            <ScheduleItemText>
              <Typography.Caption $color={colors.gray60}>
                7교시
              </Typography.Caption>
            </ScheduleItemText>
            <ScheduleItemText>
              <Typography.Body $color={colors.gray80}>-</Typography.Body>
            </ScheduleItemText>
          </ScheduleItem>
        </ScheduleRow>
      </ScheduleColumn>
    </Card>
  );
}

const ScheduleItemText = styled.View`
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const ScheduleRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const ScheduleItem = styled.View`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  flex: 1 0 0;
`;

const ScheduleColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const TimestampColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const TimestampRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const CurrentTimestampLayout = styled.View`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray10};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray30};
  border-radius: 8px;
  align-self: stretch;
  gap: 12px;
  flex-direction: column;
  display: flex;
`;
