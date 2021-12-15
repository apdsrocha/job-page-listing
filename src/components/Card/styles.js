import styled from "styled-components";

export const Card = styled.article`
  background-color: hsl(0, 0%, 100%);
  padding: 10px;
  margin: 50px 20px;
  border-left: 6px solid hsl(180, 29%, 50%);
  border-radius: 5px;
`;
export const Avatar = styled.img`
  width: 50px;
  margin-top: -40px;
  margin-bottom: 10px;
`;
export const CompanyName = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  color: hsl(180, 29%, 50%);
  padding: 5px;
`;
export const JobTitle = styled.p`
  font-weight: 700;
  padding: 5px 5px 0 5px;
`;
export const PostInfo = styled.div`
  font-size: 0.8rem;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid hsl(180, 8%, 80%);
  margin-right: 12px;
`;

export const PostInfoTxt = styled.p`
  color: hsl(180, 8%, 45%);
  padding: 5px 5px 5px 0;

  &:not(:first-child)::before {
    content: "•";
    padding-right: 5px;
  }
`;
export const Tags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;
export const Tag = styled.li`
  padding: 5px 10px;
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  font-size: .9rem;
  border-radius: 4px;
  margin: 8px 15px;
  margin-left: 0;
`;
